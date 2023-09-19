import React, {memo} from "react";
import Styles from "./faq.module.css";
import {FAQ_DATA} from "../../config/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "./Item";

const Faq = () => {
    return (
        <section id={Styles.faq}>
            <Container>
                <Row>
                    <h2 className={Styles.faq_title}>Get access to our privacy experts</h2>
                    <p className={Styles.faq_text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <div className={"mt-3"}>
                        {FAQ_DATA.map((e) => {
                            return <Item key={e.id} question={e.question} answer={e.answer}/>
                        })}

                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default memo(Faq);
