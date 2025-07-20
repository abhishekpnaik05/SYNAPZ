import express from "express";
import Thread from "../models/Thread.js";
import getOpenAIAPIResponse from "../utils/openai.js";

const router = express.Router();

//test
router.post("/test", async(req, res) => {
    try {
        const thread = new Thread({
            threadId: "abc",
            userId: "test_user",
            title: "Testing New Thread2"
        });

        const response = await thread.save();
        res.send(response);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Failed to save in DB"});
    }
});

//Get all threads for a specific user
router.get("/thread", async(req, res) => {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({error: "userId is required"});
    }

    try {
        const threads = await Thread.find({ userId }).sort({updatedAt: -1});
        //descending order of updatedAt...most recent data on top
        res.json(threads);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Failed to fetch threads"});
    }
});

router.get("/thread/:threadId", async(req, res) => {
    const { threadId } = req.params;
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({error: "userId is required"});
    }

    try {
        const thread = await Thread.findOne({ threadId, userId });

        if(!thread) {
            return res.status(404).json({error: "Thread not found"});
        }

        res.json(thread.messages);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Failed to fetch chat"});
    }
});

router.delete("/thread/:threadId", async (req, res) => {
    const { threadId } = req.params;
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({error: "userId is required"});
    }

    try {
        const deletedThread = await Thread.findOneAndDelete({ threadId, userId });

        if(!deletedThread) {
            return res.status(404).json({error: "Thread not found"});
        }

        res.status(200).json({success : "Thread deleted successfully"});

    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Failed to delete thread"});
    }
});

router.post("/chat", async(req, res) => {
    const { threadId, message, userId } = req.body;

    if(!threadId || !message || !userId) {
        return res.status(400).json({error: "missing required fields (threadId, message, userId)"});
    }

    try {
        let thread = await Thread.findOne({ threadId, userId });

        if(!thread) {
            //create a new thread in Db for this specific user
            thread = new Thread({
                threadId,
                userId,
                title: message,
                messages: [{role: "user", content: message}]
            });
        } else {
            thread.messages.push({role: "user", content: message});
        }

        const assistantReply = await getOpenAIAPIResponse(message);

        thread.messages.push({role: "assistant", content: assistantReply});
        thread.updatedAt = new Date();

        await thread.save();
        res.json({reply: assistantReply});
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "something went wrong"});
    }
});

export default router;