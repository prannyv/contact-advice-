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
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }


    const sendMessage = (e) => {
        e.preventDefault();
        if(input.trim()){

            setm1(postConversation("ethan", {input})['response']);
            // sleep(200);
            // setm2(postConversation("lecia", {input})['response']);
            // sleep(200);
            // setm3(postConversation("pranav", {input})['response']);
            

            // Add the user message
            setMessage(prevMessages => [
                ...prevMessages, 
                input, // User message
                m1, // Additional messages
                m2,
                m3
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