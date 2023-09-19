import React, {memo, useState} from "react";
import Styles from "./faq.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Item = ({question, answer}) => {
    const [isShow, setIsShow] = useState(false);
    const showAnswer = () => {
        setIsShow(!isShow)
    };

    return question && answer ? (
        <Row className={'m-2'}>
            <Col className={Styles.faq_container}>
                <p className={Styles.faq_question} onClick={() => showAnswer()}>Question What is a data broker?</p>
                {
                    isShow ? (
                        <>
                            <hr/>
                            <p className={Styles.faq_answer}>Answer What is a data broker?</p>
                        </>
                    ) : ('')
                }
            </Col>
        </Row>
    ) : (
        ""
    );
};

export default memo(Item);
