import React, {memo} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Plane from "./Plane";

const PricingList = () => {
    const plane_1_title = 'Standard Protection 1 Year, 1 Person';
    const plane_1_sum = '10/75';
    const plane_1_text1 = 'Standard LogoName protection plan for 1 person.';
    const plane_1_text2 = 'Remove yourself from all major data websites for 1 year.';

    const plane_2_title = 'Most Popular 1 Year, 2 Person';
    const plane_2_save = 11;
    const plane_2_sum = '19/08';
    const plane_2_text1 = 'Our most popular LogoName protection plan.';
    const plane_2_text2 = 'Remove 2 people from all major data broker websites for 1 year.';

    const plane_3_title = 'Best Value 2 Year, 2 Person';
    const plane_3_save = 17;
    const plane_3_sum = '14/54';
    const plane_3_text1 = 'Get bonus savings witha multi-year plan.';
    const plane_3_text2 = 'Remove 2 people from all major data broker websites for 2 years.';
    return (
        <Container>
            <Col lg={11} className={'m-auto'}>
                <Row>
                    <Plane title={plane_1_title} sum={plane_1_sum} text1={plane_1_text1} text2={plane_1_text2}/>
                    <Plane title={plane_2_title} sum={plane_2_sum} text1={plane_2_text1} text2={plane_2_text2} save={plane_2_save}/>
                    <Plane title={plane_3_title} sum={plane_3_sum} text1={plane_3_text1} text2={plane_3_text2} save={plane_3_save}/>
                </Row>
            </Col>
        </Container>
    );
};

export default memo(PricingList);
