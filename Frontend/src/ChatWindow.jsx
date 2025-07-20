import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext, useState, useEffect } from "react";
import {ScaleLoader} from "react-spinners";

function ChatWindow() {
    const {prompt, setPrompt, reply, setReply, currThreadId, setPrevChats, setNewChat} = useContext(MyContext);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [userId, setUserId] = useState(null);

    // Generate or get user session ID
    useEffect(() => {
        let userSessionId = sessionStorage.getItem('userSessionId');
        
        if (!userSessionId) {
            // Generate a unique user ID if one doesn't exist
            userSessionId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('userSessionId', userSessionId);
        }
        
        setUserId(userSessionId);
    }, []);

    const getReply = async () => {
        if (!userId) {
            console.error("User ID not available");
            return;
        }

        setLoading(true);
        setNewChat(false);

        console.log("message ", prompt, " threadId ", currThreadId, " userId ", userId);
        
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: prompt,
                threadId: currThreadId,
                userId: userId // Include user ID in the request
            })
        };

        try {
            const response = await fetch("https://synapz-backend.onrender.com/api/chat", options);
            const res = await response.json();
            console.log(res);
            setReply(res.reply);
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
    }

    //Append new chat to prevChats
    useEffect(() => {
        if(prompt && reply) {
            setPrevChats(prevChats => (
                [...prevChats, {
                    role: "user",
                    content: prompt
                },{
                    role: "assistant",
                    content: reply
                }]
            ));
        }

        setPrompt("");
    }, [reply]);

    const handleProfileClick = () => {
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        // Clear user session
        sessionStorage.removeItem('userSessionId');
        // Refresh the page to start a new session
        window.location.reload();
    }

    return (
        <div className="chatWindow">
            <div className="navbar">
                <div className="navbar-center">
                    SYNAPZ <i className="fa-solid fa-chevron-down"></i>
                </div>
            <div className="userIconDiv" onClick={handleProfileClick}>
                <span className="userIcon"><i className="fa-solid fa-user"></i></span>
            </div>
        </div>
            {
                isOpen && 
                <div className="dropDown">
                    <div className="dropDownItem"><i className="fa-solid fa-gear"></i> Settings</div>
                    <div className="dropDownItem"><i className="fa-solid fa-cloud-arrow-up"></i> Upgrade plan</div>
                    <div className="dropDownItem" onClick={handleLogout}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
                    </div>
                </div>
            }
            <Chat></Chat>

            <ScaleLoader color="#fff" loading={loading}>
            </ScaleLoader>
            
            <div className="chatInput">
                <div className="inputBox">
                    <input placeholder="Ask anything"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter'? getReply() : ''}
                        disabled={!userId} // Disable input until user ID is available
                    >
                           
                    </input>
                    <div id="submit" onClick={getReply}><i className="fa-solid fa-paper-plane"></i></div>
                </div>
                <p className="info">
                    SYNAPZ can make mistakes. Check important info.
                </p>
            </div>
        </div>
    )
}

export default ChatWindow;