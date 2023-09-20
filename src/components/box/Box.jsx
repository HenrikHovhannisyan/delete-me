import React, {memo} from "react";
import Col from "react-bootstrap/Col";
import Styles from "./box.module.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Box = ({content}) => {
    return (
        <section id={Styles.box}>
            <Container>
                <Row>
                    <Col className={"m-auto"}>
                        {content()}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default memo(Box);
