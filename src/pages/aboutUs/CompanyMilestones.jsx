import React, {memo} from "react";
import Styles from "./aboutUs.module.css";
import Image from "react-bootstrap/Image";
import IMAGE from "../../assets/img/company-milestones.png";
import Container from "react-bootstrap/Container";

const CompanyMilestones = () => {
    return(
        <section id={Styles.companyMilestones}>
            <Container>
                <h2>Company milestones</h2>
                <Image src={IMAGE} fluid/>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and <br/>
                    typesetting industry. Lorem Ipsum has been the industry's <br/>
                    standard dummy text ever since the 1500s.
                </p>
            </Container>
        </section>
    );
};

export default memo(CompanyMilestones);
