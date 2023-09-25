import React, {memo} from "react";
import Styles from "./pageHeader.module.css";
import NavBar from "../navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PageHeader = ({title, text, _class}) => {
    return (
        <section id={Styles.banner}>
            <NavBar/>
            <Container>
                <Row>
                    <Col className={`text-center ${_class}`}>
                        <h1 className={Styles.banner_title}>
                            {title}
                        </h1>
                        <p className={Styles.banner_text}>
                            {text}
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default memo(PageHeader);
