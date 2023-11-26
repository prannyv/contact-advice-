import { Container, Row , Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { PersonCard } from "./components/PersonCard";
import A1 from './images/avatar1.png';
import A2 from './images/avatar2.png';
import A3 from './images/avatar3.png';
import A4 from './images/avatar4.png';
import A5 from './images/avatar5.png';
import A6 from './images/avatar6.png';
import A7 from './images/avatar7.png';
import A8 from './images/avatar8.png';

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
                    <button style={{ width: "90px", height: "50px", borderRadius: "12px", fontSize: "14px", backgroundColor: "#4E9DE0", color: "#FAFAFA", cursor:"pointer"}}>Continue → </button>
                    </a>
                </div>

            </div>

            {/* row1 */}
            <div style={{display: "flex", flexDirection: "row", marginBottom: "55px"}}>
                <div style={{flex: 0.35}} />
                <div style={{flex: 1}}>
                <PersonCard name="Pranav Varma" imgPath={A1}></PersonCard>
                </div>
                <div style={{flex: 1}}>
                    <PersonCard name="Ethan Rong" imgPath={A2}></PersonCard>
                </div>
                <div style={{flex: 1}}>
                    <PersonCard name="Isabelle Gan" imgPath={A3}></PersonCard>
                </div>
                <div style={{flex: 1}}>
                    <PersonCard name="Lecia Cheng" imgPath={A4}></PersonCard>
                </div>
                <div style={{flex: 0.35}} />
            </div>


            {/*  row2 */}
            <div style={{display: "flex", flexDirection: "row", marginBottom: "80px"}}>
                <div style={{flex: 0.35}} />
                <div style={{flex: 1}}>
                <PersonCard name="Pranav Varma" imgPath={A5}></PersonCard>
                </div>
                <div style={{flex: 1}}>
                    <PersonCard name="Ethan Rong" imgPath={A6}></PersonCard>
                </div>
                <div style={{flex: 1}}>
                    <PersonCard name="Isabelle Gan" imgPath={A7}></PersonCard>
                </div>
                <div style={{flex: 1}}>
                    <PersonCard name="Lecia Cheng" imgPath={A8}></PersonCard>
                </div>
                <div style={{flex: 0.35}} />
            </div>
        </div>

    )
}