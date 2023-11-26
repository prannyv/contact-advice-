import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
//import { postConversation } from "../APICalls";
import { About } from "./About";
import { PersonCard } from "./PersonCard";
import { Selection } from "../Selection";

const postConversation = 2;

export const Main = () => {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getData(val) {
        setData(val.target.value);
        setPrint(false);
        console.warn(val.target.value);
    }

    useEffect(() => {
        let isMounted = true; // Track whether the component is mounted

        const fetchData = async () => {
            const response = await postConversation();
            if (isMounted) {
                // Update state only if the component is still mounted
                // Do something with the response if necessary
            }
        };

        fetchData();

        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, [print]); // Dependency array


    return (
        <section className="main" id="main">
            <Container>
                <div style={{ backgroundImage: "url(../src/images/bg.png)", backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
                    <div className="main-text">
                        <p style={{ fontSize: "64px", fontWeight: "bold", lineHeight: "48px", marginBottom: "14px" }}>SpeedDial</p>
                        <p style={{ fontSize: "34px", fontWeight: "normal", lineHeight: "28px", marginBottom: "8px" }}>Connect with your inner circle — anytime, anywhere.</p>
                    </div>
                    <div style={{ marginTop: "78px", marginLeft: "200px" }}>
                        {/* <input className="main-input" type="text" defaultValue="Go!" onClickonChange={getData}></input>
                        <button className="main-button" onClick={()=>setPrint(true)}></button>
                        {
                            print?
                            <h1 className="main-data">{data}</h1>
                            :null
                        } */}

                        <a href="/Selection">
                            <button style={{ height: "5rem", width: "14rem", borderRadius: "8px", fontSize: "30px", fontWeight: "bold", border: "#BA7441", backgroundColor: "#E9985E" }}>Start Now!</button>
                        </a>
                    </div>
                </div>
                <div style={{ height: "17rem" }}></div>
            </Container>

            <Container>
                <About></About>
            </Container>
        </section>


    )
}