import React from "react";
import "./Chat.css";
import icon from '../images/profile.png';

function Chat({ contents, index }) {
    let backgroundColor;
    let alignSelf;
    let order; // This will determine the order of the icon and message bubble
    switch(index % 4) {
        case 1: 
            backgroundColor = 'darkgreen'; 
            alignSelf = 'flex-start'; // Align to left
            order = 0; // Icon appears before the message
            break;
        case 2: 
            backgroundColor = 'black'; 
            alignSelf = 'flex-start'; // Align to left
            order = 0; // Icon appears before the message
            break;
        case 3: 
            backgroundColor = 'darkcyan'; 
            alignSelf = 'flex-start'; // Align to left
            order = 0; // Icon appears before the message
            break;
        default: 
            backgroundColor = '#007AFF'; // Default color for user messages
            alignSelf = 'flex-end'; // Align to right
            order = 1; // Icon appears after the message
    }

    return (
        <div className="message" style={{ alignSelf, display: 'flex', flexDirection: 'row' }}>
            <img src={icon} alt="Profile Icon" style={{ order }} />
            <p style={{ backgroundColor, order: order + 1 }}>{contents}</p>
        </div>
    );
}


export default Chat;