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
                    <Col>
                        {content()}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default memo(Box);
