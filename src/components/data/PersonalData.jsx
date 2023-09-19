import React, {memo} from "react";
import Styles from "./data.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import dataImage from "../../assets/img/data_bg.png";

const Data = () => {
    return (
        <section id={Styles.data}>
            <Container>
                <Row>
                    <Col lg={6} className={'d-flex align-items-center justify-content-start'}>
                        <Col className={'mt-3'}>
                            <h2 className={Styles.data_title}>Lorem ipsum</h2>
                            <p className={Styles.data_text}>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s.
                            </p>
                            <p className={Styles.data_text}>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum.
                            </p>
                        </Col>
                    </Col>
                    <Col lg={6}>
                        <Image src={dataImage} fluid/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default memo(Data);
