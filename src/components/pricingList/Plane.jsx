import React, {memo} from "react";
import Styles from "./pricingList.module.css";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import PLANE_1 from "../../assets/img/plane/1.png";
import Button from 'react-bootstrap/Button';

const Plane = ({title, sum, text1, text2, save}) => {
    return (
        <Col lg={4}>
            <div className={Styles.plane}>
                <div className={Styles.plane_header}>
                    <Image src={PLANE_1} fluid/>
                    <div className={'ms-2'}>
                        <p className={Styles.plane_header_text}>For individuals</p>
                        <h3 className={Styles.plane_header_title}>
                            {title}
                        </h3>
                    </div>
                    {save &&
                    <div className={Styles.save}>
                        <p>Save <span>{save}</span>%</p>
                    </div>
                    }
                </div>
                <div className={Styles.plane_sum_month}>
                    <span className={Styles.plane_sum}>${sum}</span>
                    <p className={Styles.plane_month}>/monthly</p>
                </div>
                <div className={Styles.plane_container}>
                    <p className={Styles.plane_container_text_b}>
                        {text1}
                    </p>
                    <p className={Styles.plane_container_text}>
                        {text2}
                    </p>
                    <Button className={Styles.plane_container_btn}>Start Protection</Button>
                </div>
                <div className={Styles.plane_footer}>
                    <p>U.S. residents only.</p>
                    <p>Automatically renews unless canceled.</p>
                </div>
            </div>
        </Col>
    );
};

export default memo(Plane);
