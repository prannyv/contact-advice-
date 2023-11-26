import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import React from 'react'
import './Message.css'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import Chat from "./Chat";

export const Message = () => {
    const [input, setInput] = useState("");
    const [messages, setMessage] = useState([]);

    


    const sendMessage = (e) => {
        e.preventDefault();
        if(input.trim()){
            // Add the user message
            setMessage(prevMessages => [
                ...prevMessages, 
                input, // User message
                "Auto Message 1", // Additional messages
                "Auto Message 2",
                "Auto Message 3"
            ]);
            setInput("");
        }
    };
    

    return(
        <div className="chat-container">
            <div className="bg">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <Chat key={index} contents={message} index={index} />
                ))}
            </div>
                <div className="chat-input">
                    <form className="form" onSubmit={sendMessage}>
                        <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="iMessage" 
                        type="text"/>
                        <button onClick={sendMessage}>Send</button>

                    </form>
                </div>
            </div>
        </div>
    )
}