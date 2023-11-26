import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { postConversation } from "../APICalls";


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
        <section className="main">
            <Container>
                <div className="main-text">
                    <h1>Hack Western</h1>
                    <h1>NAME OF PROJECT</h1>
                </div>
                <div className="main-inputfield">
                    <input className="main-input" type="text" onChange={getData}></input>
                    <button className="main-button" onClick={() => setPrint(true)}></button>
                    {
                        print ?
                            <h1 className="main-data">{data}</h1>
                            : null
                    }
                </div>
            </Container>
        </section>
    )
}