import React, {memo} from "react";
import Styles from "./support.module.css";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import Row from "react-bootstrap/Row";
import CommentImg from "../../assets/img/icons/comment.png"
import Image from "react-bootstrap/Image";

const RecentActivityItem = ({title, question, days, comment}) => {
    return (
        <Col>
            <Link to={'#'} className={Styles.promotedArticles_title_link}>
                {title}
            </Link>
            <Row className={Styles.recentActivityItem_container}>
                <Col lg={6}>
                    <p>{question}</p>
                </Col>
                <Col lg={6} className={'text-start text-lg-end'}>
                    <p>Article created <span>{days}</span> days ago <Image src={CommentImg}/> <span>{comment}</span></p>
                </Col>
            </Row>
        </Col>
    );
};

export default memo(RecentActivityItem);
