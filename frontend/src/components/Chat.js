import React from "react";
import "./Chat.css";
import icon from '../images/profile.png';

function Chat({ id, contents}){
    return(
        <div className="message">
            <img src={icon}></img>
            <p>{contents}</p>
        </div>
    )
}

export default Chat;