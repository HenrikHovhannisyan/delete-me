import React, {memo} from "react";
import Styles from "./header.module.css";
import NavBar from "../navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BannerImage from "./../../assets/img/banner_img.png";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <section id={Styles.banner}>
            <NavBar/>
            <Container>
                <Row>
                    <Col lg={{ span: 6, order: 2 }} md={{ order: 1 }}>
                        <Image src={BannerImage} className={Styles.banner_image} fluid/>
                    </Col>
                    <Col lg={{ span: 6, order: 1 }}  md={{ order: 2 }} className={'d-flex justify-content-center align-items-center'}>
                        <Col>
                            <h1 className={Styles.banner_title}>
                                Your Personal Data is<br/>
                                <span>Yours Again.</span>
                            </h1>
                            <p className={Styles.banner_text}>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s.
                            </p>
                            <Link className={`btn ${Styles.btn_banner}`} to={'#'}>Get protection all year</Link>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default memo(Header);
