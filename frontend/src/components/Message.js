import { Container, Row , Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export const Message = () => {
    return(
        <div className="Message">
            <section className="message-rectangle">
                <Container>
                    <Row>
                        <Col>
                            <div className='message-title'>HACK WESTERN 10</div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}