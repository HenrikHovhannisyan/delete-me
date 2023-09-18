import React, {memo} from "react";
import Styles from "./info.module.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

const Info = () => {
    return (
        <section id={Styles.info}>
            <Container fluid>
                <Col className="text-center">
                    <h2 className={Styles.info_title}>Is employee personal data creating risk for your business?</h2>
                    <p className={`mb-0 ${Styles.info_text}`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className={Styles.info_text}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <Link to={"#"} className={`btn ${Styles.info_btn}`}>Learn More</Link>
                </Col>

            </Container>
        </section>
    )
};

export default memo(Info);
