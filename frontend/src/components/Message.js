import { Container, Row , Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export const Message = () => {
    return(
        <div className="message">
            <section className="message-rectangle">
                <Container>
                    <Row>
                        <Col>
                        <div className="message-title-parent">
                            <div className='message-title-bg'></div>
                            <div className='message-title'></div>
                            <div className="message-header"></div>
                            <p className="message-header-title">TO: HACK WESTERN 10</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}