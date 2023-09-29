import React, {memo} from "react";
import Styles from "./aboutUs.module.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Privacy_Items} from "../../config/data";
import Item from "./item";

const Privacy = () => {
    return (
        <Container>
            <Col className={Styles.about_banner_container}>
                <h2>Privacy is at our core.</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                    a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                </p>
                <Row>
                    <Col lg={3}>
                        {Privacy_Items[0].map((e) => {
                            return <Item key={e.id} img={e.img} text={e.text}/>
                        })}
                    </Col>
                    <Col lg={3}>
                        {Privacy_Items[1].map((e) => {
                            return <Item key={e.id} img={e.img} text={e.text}/>
                        })}
                    </Col>
                    <Col lg={3}>
                        {Privacy_Items[2].map((e) => {
                            return <Item key={e.id} img={e.img} text={e.text}/>
                        })}
                    </Col>
                    <Col lg={3}>
                        {Privacy_Items[3].map((e) => {
                            return <Item key={e.id} img={e.img} text={e.text}/>
                        })}
                    </Col>
                </Row>
            </Col>
        </Container>
    );
};

export default memo(Privacy);