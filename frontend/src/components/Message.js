import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import React from 'react'
import './Message.css'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import Chat from "./Chat";
import { postConversation } from "../APICalls";

export const Message = () => {
    const [input, setInput] = useState("");
    const [messages, setMessage] = useState([]);
    const [m1, setm1] = useState("");
    const [m2, setm2] = useState("");
    const [m3, setm3] = useState("");
    const [loading, setLoading] = useState(false)
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }


    const sendMessage = async (e) => {
        e.preventDefault();
        if(input.trim()){
            setLoading(!loading);
            const r1 = await postConversation("ethan", {input});
            const r2 = await postConversation("isabelle", {input});
            const r3 = await postConversation("pranav", {input});

            // Add the user message
            setMessage(prevMessages => [
                ...prevMessages, 
                input, // User message
                r1.response, // Additional messages
                r2.response,
                r3.response
            ]);
            setInput("");
            setLoading(!loading);
        }
    };
    

    return(
        <div className="chat-container slideleft">
            <div className="bg">
            <div className="chat-messages slideleft">
                {messages.map((message, index) => (
                    <Chat key={index} contents={message} index={index} className='slideleft'/>
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