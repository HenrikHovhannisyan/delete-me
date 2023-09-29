import React, {memo} from "react";
import Styles from "./aboutUs.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IMG from "../../assets/img/about-us-info.png"
import Image from "react-bootstrap/Image";

const Info = () => {
    return (
        <section id={Styles.info}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h2 className={Styles.info_title}>Lorem ipsum</h2>
                        <p className={Styles.info_text}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s.
                        </p>
                        <p className={Styles.info_text}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum.
                        </p>
                        <p className={Styles.info_text}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s.
                        </p>
                        <p className={Styles.info_text}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum.
                        </p>
                    </Col>
                    <Col lg={6}>
                        <Image src={IMG} fluid/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default memo(Info);
