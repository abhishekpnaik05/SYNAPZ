import "./Sidebar.css";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext.jsx";
import { v1 as uuidv1 } from "uuid";

function Sidebar() {
    const {
        allThreads,
        setAllThreads,
        currThreadId,
        setNewChat,
        setPrompt,
        setReply,
        setCurrThreadId,
        setPrevChats,
    } = useContext(MyContext);

    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Helper function to truncate long titles
    const truncateTitle = (title, maxLength = 30) => {
        if (!title) return "New Chat";
        if (title.length <= maxLength) return title;
        return title.substring(0, maxLength) + "...";
    };

    // Helper function to generate a proper title from content
    const generateTitle = (content) => {
        if (!content) return "New Chat";
        
        // Remove extra whitespace and newlines
        const cleanContent = content.replace(/\s+/g, ' ').trim();
        
        // Take first sentence or first 40 characters
        const firstSentence = cleanContent.split('.')[0];
        if (firstSentence.length > 0 && firstSentence.length <= 50) {
            return firstSentence;
        }
        
        // Fallback to first 40 characters
        return cleanContent.substring(0, 40) + (cleanContent.length > 40 ? "..." : "");
    };

    const getAllThreads = async () => {
        try {
            const response = await fetch("https://synapz-backend.onrender.com/api/thread");
            const res = await response.json();
            const filteredData = res.map(thread => ({ 
                threadId: thread.threadId, 
                title: generateTitle(thread.title) // Process the title here
            }));
            setAllThreads(filteredData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllThreads();
    }, [currThreadId]);

    const createNewChat = () => {
        setNewChat(true);
        setPrompt("");
        setReply(null);
        setCurrThreadId(uuidv1());
        setPrevChats([]);
        setSidebarOpen(false);
    };

    const changeThread = async (newThreadId) => {
        setCurrThreadId(newThreadId);
        try {
            const response = await fetch(`https://synapz-backend.onrender.com/api/thread/${newThreadId}`);
            const res = await response.json();
            setPrevChats(res);
            setNewChat(false);
            setReply(null);
            setSidebarOpen(false);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteThread = async (threadId) => {
        try {
            const response = await fetch(`https://synapz-backend.onrender.com/api/thread/${threadId}`, {
                method: "DELETE",
            });
            const res = await response.json();
            setAllThreads(prev => prev.filter(thread => thread.threadId !== threadId));

            if (threadId === currThreadId) {
                createNewChat();
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <i className="fa-solid fa-bars"></i>
            </button>

            <section className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <button onClick={createNewChat}>
                    <img src="/assets/blacklogo.png" alt="gpt logo" className="logo" />
                    <span><i className="fa-solid fa-pen-to-square"></i></span>
                </button>

                <ul className="history">
                    {allThreads?.map((thread, idx) => (
                        <li
                            key={idx}
                            onClick={() => changeThread(thread.threadId)}
                            className={thread.threadId === currThreadId ? "highlighted" : ""}
                            title={thread.title} // Show full title on hover
                        >
                            <span className="thread-title">
                                {truncateTitle(thread.title)}
                            </span>
                            <i
                                className="fa-solid fa-trash"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteThread(thread.threadId);
                                }}
                            ></i>
                        </li>
                    ))}
                </ul>

                <div className="sign">
                    <p>By SYNAPZ &hearts;</p>
                </div>
            </section>
        </>
    );
}

export default Sidebar;