import { Container, Row , Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { PersonCard } from "./components/PersonCard";

export const Selection = () => {

    


    return (

        <div >

            <div style={{display: "flex", marginBottom: "25px", marginTop: "30px"}}>
                <div style={{marginLeft: "120px", marginTop: "60px", flex: 4}}>
                    <p style={{fontSize: "32px", color: "#E9985E", fontWeight: "bold"}}>Choose Your Characters</p>
                    <p style={{fontSize: "18px"}}>Pick 4 characters from the selection below</p>
                </div>
                <div style={{flex: 6}}></div>
                <div style={{flex:2, marginTop: "110px"}}>
                    <a href="/messages">
                    <button style={{ width: "90px", height: "50px", borderRadius: "12px", fontSize: "14px", backgroundColor: "#4E9DE0", color: "#FAFAFA"}}>Continue → </button>
                    </a>
                </div>

            </div>

            {/* row1 */}
            <div style={{display: "flex", flexDirection: "row", marginBottom: "55px"}}>
                <div style={{flex: 0.35}} />
                <div style={{flex: 1}}>
                <PersonCard name="Pranav Varma" imgPath="../src/images/bg.png"></PersonCard>
                </div>
                <div style={{flex: 1}}>
                    <PersonCard name="Ethan Rong" imgPath="../src/images/bg.png"></PersonCard>
                </div>
                <div style={{flex: 1}}>
                    <PersonCard name="Isabelle Gan" imgPath="../src/images/bg.png"></PersonCard>
                </div>
                <div style={{flex: 1}}>
                    <PersonCard name="Lecia Cheng" imgPath="../src/images/bg.png"></PersonCard>
                </div>
                <div style={{flex: 0.35}} />
            </div>


            {/*  row2 */}
            <div style={{display: "flex", flexDirection: "row", marginBottom: "80px"}}>
                <div style={{flex: 0.35}} />
                <div style={{flex: 1}}>
                <PersonCard name="Pranav Varma" imgPath="../src/images/bg.png"></PersonCard>
                </div>
                <div style={{flex: 1}}>
                    <PersonCard name="Ethan Rong" imgPath="../src/images/bg.png"></PersonCard>
                </div>
                <div style={{flex: 1}}>
                    <PersonCard name="Isabelle Gan" imgPath="../src/images/bg.png"></PersonCard>
                </div>
                <div style={{flex: 1}}>
                    <PersonCard name="Lecia Cheng" imgPath="../src/images/bg.png"></PersonCard>
                </div>
                <div style={{flex: 0.35}} />
            </div>
        </div>

    )
}