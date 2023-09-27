import React, {memo} from "react";
import Styles from "./whyChoose.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "./Item";
import {WhyWhooseData} from "../../config/why-whoose-data";

const WhyChoose = () => {

    return (
        <section id={Styles.whyChoose}>
            <h2 className={Styles.whyChoose_title}>Why Choose LogoName</h2>
            <Container>
                <Row className={'mt-4'}>
                    {WhyWhooseData.map((e) => <Item key={e.id} img={e.img} title={e.title} text={e.text}/>)}
                </Row>
            </Container>
        </section>
    );
};

export default memo(WhyChoose);
