import React, {memo} from "react";
import Styles from "./aboutUs.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import user from "../../assets/img/icons/user.png";
import users from "../../assets/img/icons/users.png";
import clock from "../../assets/img/icons/clock.png";
import location from "../../assets/img/icons/location.png";
import camera from "../../assets/img/icons/camera.png";
import mail from "../../assets/img/icons/mail.png";
import globe from "../../assets/img/icons/globe.png";
import job from "../../assets/img/icons/job.png";
import heart from "../../assets/img/icons/heart.png";
import home from "../../assets/img/icons/home.png";

const Privacy = () => {
    return(
        <Col className={Styles.about_banner_container}>
            <h2>Privacy is at our core.</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <Row>
                <Col lg={3}>
                    <p className={'mb-2 d-flex align-items-center'}>
                        <Image src={user} fluid/>
                        <span className={'ms-3'}>Name</span>
                    </p>
                    <p className={'mb-2 d-flex align-items-center'}>
                        <Image src={clock} fluid/>
                        <span className={'ms-3'}>Age</span>
                    </p>
                    <p className={'mb-2 d-flex align-items-center'}>
                        <Image src={location} fluid/>
                        <span className={'ms-3'}>Location</span>
                    </p>
                </Col>
                <Col lg={3}>
                    <p className={'mb-2 d-flex align-items-center'}>
                        <Image src={camera} fluid/>
                        <span className={'ms-3'}>Photos</span>
                    </p>
                    <p className={'mb-2 d-flex align-items-center'}>
                        <Image src={mail} fluid/>
                        <span className={'ms-3'}>Email</span>
                    </p>
                    <p className={'mb-2 d-flex align-items-center'}>
                        <Image src={location} fluid/>
                        <span className={'ms-3'}>Past Address</span>
                    </p>
                </Col>
                <Col lg={3}>
                    <p className={'mb-2 d-flex align-items-center'}>
                        <Image src={user} fluid/>
                        <span className={'ms-3'}>Phone</span>
                    </p>
                    <p className={'mb-2 d-flex align-items-center'}>
                        <Image src={users} fluid/>
                        <span className={'ms-3'}>Relatives</span>
                    </p>
                    <p className={'mb-2 d-flex align-items-center'}>
                        <Image src={globe} fluid/>
                        <span className={'ms-3'}>Social Media</span>
                    </p>
                </Col>
                <Col lg={3}>
                    <p className={'mb-2 d-flex align-items-center'}>
                        <Image src={job} fluid/>
                        <span className={'ms-3'}>Occupation</span>
                    </p>
                    <p className={'mb-2 d-flex align-items-center'}>
                        <Image src={heart} fluid/>
                        <span className={'ms-3'}>Marital Status</span>
                    </p>
                    <p className={'mb-2 d-flex align-items-center'}>
                        <Image src={home} fluid/>
                        <span className={'ms-3'}>Property Value</span>
                    </p>
                </Col>
            </Row>
        </Col>
    );
};

export default memo(Privacy);