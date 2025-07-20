import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["user", "assistant"],
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const ThreadSchema = new mongoose.Schema({
    threadId: {
        type: String,
        required: true,
        unique: false // Changed from unique: true since multiple users can have same threadId
    },
    userId: {
        type: String,
        required: true,
        index: true // Add index for better query performance
    },
    title: {
        type: String,
        default: "New Chat"
    },
    messages: [MessageSchema],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Create compound index for threadId + userId combination to ensure uniqueness per user
ThreadSchema.index({ threadId: 1, userId: 1 }, { unique: true });

export default mongoose.model("Thread", ThreadSchema);