import React, {memo} from "react";
import Styles from "./aboutUs.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

import Image_1 from "../../assets/img/team/1.png";
import Image_2 from "../../assets/img/team/2.png";
import Image_3 from "../../assets/img/team/3.png";
import Image_4 from "../../assets/img/team/4.png";

const Team = () => {
    return(
        <section id={Styles.team}>
            <Container>
                <h2 className={Styles.team_title}>Management team</h2>
                <Row>
                    <div className={`col-6 col-lg-3`}>
                        <Image src={Image_1} fluid/>
                        <p className={Styles.team_name}>Rob Shavell</p>
                        <p className={Styles.team_position}>Co-founder and CEO</p>
                        <Link className={Styles.team_view} to={'#'}>View Bio</Link>
                    </div>
                    <div className={`col-6 col-lg-3`}>
                        <Image src={Image_2} fluid/>
                        <p className={Styles.team_name}>Rob Shavell</p>
                        <p className={Styles.team_position}>Co-founder and CEO</p>
                        <Link className={Styles.team_view} to={'#'}>View Bio</Link>
                    </div>
                    <div className={`col-6 col-lg-3`}>
                        <Image src={Image_3} fluid/>
                        <p className={Styles.team_name}>Rob Shavell</p>
                        <p className={Styles.team_position}>Co-founder and CEO</p>
                        <Link className={Styles.team_view} to={'#'}>View Bio</Link>
                    </div>
                    <div className={`col-6 col-lg-3`}>
                        <Image src={Image_4} fluid/>
                        <p className={Styles.team_name}>Rob Shavell</p>
                        <p className={Styles.team_position}>Co-founder and CEO</p>
                        <Link className={Styles.team_view} to={'#'}>View Bio</Link>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default memo(Team);
