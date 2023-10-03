import React, {memo} from "react";
import Styles from "./support.module.css";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";
import RecentActivityItem from "./RecentActivityItem";
import {RecentActivityData} from "../../config/data";

const PromotedArticles = () => {
    return (
        <section className={Styles.promotedArticles}>
            <Container className={Styles.promotedArticles_container}>
                <Col className={Styles.promotedArticles_col}>
                    <h2 className={Styles.promotedArticles_title}>Promoted articles</h2>
                    <Link to={'#'} className={Styles.promotedArticles_link}>
                        How can I contact the DeleteMe support team?
                    </Link>
                </Col>
                <Col className={Styles.promotedArticles_col_1}>
                    <h2>Recent activity</h2>
                    {RecentActivityData.map((e) => {
                        return <RecentActivityItem key={e.id} title={e.title} question={e.question} days={e.days} comment={e.comment}/>
                    })
                    }
                    <Link to={"#"} className={`${Styles.promotedArticles_link} border-bottom pb-0 pe-0`}>See more</Link>
                </Col>
            </Container>
        </section>
    )
};

export default memo(PromotedArticles);
