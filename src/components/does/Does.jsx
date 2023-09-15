import React, {memo} from "react";
import Styles from "./does.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Does_1 from "./../../assets/img/does/1.png";
import Does_2 from "./../../assets/img/does/2.png";
import Does_3 from "./../../assets/img/does/3.png";
import Does_4 from "./../../assets/img/does/4.png";
import Check from "./../../assets/img/icons/check_mark.png";

const Does = () => {
    return (
        <section id={Styles.does}>
            <Container fluid>
                <Row>
                    <Col lg={{ span: 2, offset: 2 }}>
                        <Col className={"text-start mb-4"}>
                            <h2>
                                How does<br/>
                                Logo Name work?
                            </h2>
                            <p>
                                <Image src={Check} fluid/>
                                Submit Information
                            </p>
                            <p>
                                <Image src={Check} fluid/>
                                Experts search for it
                            </p>
                            <p>
                                <Image src={Check} fluid/>
                                Removal process starts
                            </p>
                            <p>
                                <Image src={Check} fluid/>
                                Scans & Deletions all year
                            </p>
                        </Col>
                        <Image src={Does_1} fluid/>
                    </Col>
                    <Col lg={3}>
                        <Image src={Does_2} fluid/>
                    </Col>
                    <Col lg={3} className={"d-flex align-items-end justify-content-center"}>
                        <Image src={Does_3} fluid/>
                    </Col>
                    <Col lg={2} className={"d-flex align-items-center justify-content-end"}>
                        <Image src={Does_4} fluid/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default memo(Does);
