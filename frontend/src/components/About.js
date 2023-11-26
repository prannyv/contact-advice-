import { Container, Row , Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export const About = () => {


    return(
        <div className="about" id="about">

            {/* container for all the horizontal cards */}
            <div>
                <div style={{display: "flex", marginBottom: "18px", marginTop: "17vw"}}>
                    <div style={{flex: 3}}>
                        <div style={{marginLeft: "6rem", marginRight: "4rem"}}>
                            <p style={{fontSize: "48px", fontWeight: "bold", marginBottom: "4px", color: "#4E9DE0"}}>The Problem</p>
                            <p>
                                <span style={{fontSize: "28px", color: "#FAFAFA"}}>In a world filled with </span>
                                <span style={{fontSize: "28px", color: "#E9985E", fontWeight: "bold"}}>never-ending decisions </span>
                                <span style={{fontSize: "28px", color: "#FAFAFA"}}>and a growing sense of </span>
                                <span style={{fontSize: "28px", color: "#E9985E", fontWeight: "bold"}}>isolation</span>
                                <span style={{fontSize: "28px", color: "#FAFAFA"}}>, we get that you sometimes just need a friend... or four 👀</span>                                
                            </p>
                        </div>
                    </div>
                    <div style={{flex: 2, backgroundColor: "yellow"}}>

                    </div>
                </div>
                <div style={{display: "flex", marginBottom: "18px"}}>
                    <div style={{flex: 2, backgroundColor: "yellow"}}>

                    </div>          
                    <div style={{flex: 3, marginBottom: "18px"}}>
                        <div style={{marginLeft: "6rem", marginRight: "4rem"}}>
                            <p style={{fontSize: "48px", fontWeight: "bold", marginBottom: "4px", color: "#4E9DE0"}}>Introducing SpeedDial</p>
                            <p>
                                <span style={{fontSize: "28px", color: "#FAFAFA"}}>We’re here to </span>
                                <span style={{fontSize: "28px", color: "#E9985E", fontWeight: "bold"}}>bridge that gap</span>
                                <span style={{fontSize: "28px", color: "#FAFAFA"}}>, helping you navigate life's complexities while promoting </span>
                                <span style={{fontSize: "28px", color: "#E9985E", fontWeight: "bold"}}>mental well-being 🫶</span>
                            </p>                        
                            </div>
                    </div>
                    
                </div>
                <div style={{display: "flex", marginBottom: "18px"}}>
                    <div style={{flex: 3}}>
                        <div style={{marginLeft: "6rem", marginRight: "4rem"}}>
                            <p style={{fontSize: "48px", fontWeight: "bold", marginBottom: "4px", color: "#4E9DE0"}}>Your 24/7 Support System</p>
                            <p>
                                <span style={{fontSize: "28px", color: "#FAFAFA"}}>Using the power of AI, engage in meaningful conversations that feel just like </span>
                                <span style={{fontSize: "28px", color: "#E9985E", fontWeight: "bold"}}>chatting with your friends ☺️</span>
                            </p>
                            <p>
                                <span style={{fontSize: "28px", color: "#FAFAFA"}}>Whether you’re looking for honest advice, a dose of reality, or a bit of humour, our AI companions are here to lend an ear and provide the </span>
                                <span style={{fontSize: "28px", color: "#E9985E", fontWeight: "bold"}}>real advice that you need to hear 🤗</span>
                            </p>
                        </div>
                    </div>
                        <div style={{flex: 2, backgroundColor: "yellow"}}>

                        </div>
                </div>
                <div style={{display: "flex", marginBottom: "18px"}}>
                <div style={{flex: 2, backgroundColor: "yellow"}}>

                </div>          
                <div style={{flex: 3}}>
                    <div style={{marginLeft: "6rem", marginRight: "4rem"}}>
                        <p style={{fontSize: "48px", fontWeight: "bold", marginBottom: "4px", color: "#4E9DE0"}}>Real Conversations with Your Friends</p>
                        <p>
                            <span style={{fontSize: "28px", color: "#FAFAFA"}}>By uploading your message history with your four friends, we bring their </span>
                            <span style={{fontSize: "28px", color: "#E9985E", fontWeight: "bold"}}>unique personalities to life</span>
                            <span style={{fontSize: "28px", color: "#FAFAFA"}}>through AI personas 😁 </span>
                        </p>
                    </div>
                </div>
                </div>
                <div style={{display: "flex", marginBottom: "100px"}}>
                   
                    <div style={{flex: 3}}>
                        <div style={{marginLeft: "6rem", marginRight: "4rem"}}>
                            <p style={{fontSize: "48px", fontWeight: "bold", marginBottom: "4px", color: "#4E9DE0"}}>Your Mental Health Matters</p>
                            <p>
                                <span style={{fontSize: "28px", color: "#FAFAFA"}}>At </span>
                                <span style={{fontSize: "28px", color: "#E9985E", fontWeight: "bold"}}>SpeedDial </span>
                                <span style={{fontSize: "28px", color: "#FAFAFA"}}>, we prioritize your mental well-being. We aim to reduce loneliness and foster a </span>
                                <span style={{fontSize: "28px", color: "#E9985E", fontWeight: "bold"}}>sense of connection</span>
                                <span style={{fontSize: "28px", color: "#FAFAFA"}}>, especially in our world today 💙</span>
                            </p>
                        </div>
                    </div>
                    <div style={{flex: 2, backgroundColor: "yellow"}}>

                    </div>       
                </div>

                <hr style={{marginBottom: "80px", color: "#F5F5F5", backgroundColor: "#F5F5F5"}}></hr>

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',}}>
                    <p style={{marginBottom: "2px"}}>
                        <span style={{fontSize: "28px", color: "#FAFAFA", fontWeight: "bold"}}>Share your thoughts, dilemmas, and stories with your AI <br/></span>
                    </p>
                    <p style={{marginTop: "2px"}}>
                        <span style={{fontSize: "28px", color: "#FAFAFA", fontWeight: "bold"}}>friends, knowing that </span>
                        <span style={{fontSize: "28px", color: "#4E9DE0", fontWeight: "bold"}}>you're never truly alone 🌎</span>
                    </p>
                    <a href="/Selection">
                        <button style={{marginTop: "2rem", marginBottom: "8rem", height: "5rem", width: "14rem", borderRadius: "8px", fontSize: "30px", fontWeight: "bold", border: "#BA7441", backgroundColor: "#E9985E"}}>Start Now!</button>
                    </a>
                </div>


            </div>
        </div>
    )

}