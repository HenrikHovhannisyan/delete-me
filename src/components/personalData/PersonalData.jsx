import React, {memo} from "react";
import Styles from "./personalData.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import PersonalDataImage from "../../assets/img/personalData_bg.png";
import {Link} from "react-router-dom";

const PersonalData = () => {
    return (
        <section id={Styles.personalData}>
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <Image src={PersonalDataImage} fluid/>
                    </Col>
                    <Col lg={6} className={'d-flex align-items-center justify-content-start'}>
                        <Col className={'mt-3'}>
                            <h2 className={Styles.personalData_title}>Your Personal Data is</h2>
                            <h2 className={Styles.personalData_title}>Yours Again.</h2>
                            <p className={Styles.personalData_text}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                                Lorem Ipsum has been the industry's standard dummy text ever<br/>
                                since the 1500s.
                            </p>
                            <Link to={"#"} className={`btn ${Styles.personalData_btn}`}>Get protection all year</Link>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default memo(PersonalData);
