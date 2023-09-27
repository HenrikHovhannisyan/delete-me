import React, {memo} from "react";
import Styles from "./whyChoose.module.css";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Item = ({img, title, text}) => {
    return (
        <Col lg={4}>
            <div className={Styles.item}>
                <Image src={img} fluid/>
                <h2 className={Styles.item_title}>{title}</h2>
                <p className={Styles.item_text}>{text}</p>
            </div>
        </Col>
    );
};

export default memo(Item);
