import React, {memo} from "react";
import CUSTOMERS from "../../assets/img/customers.png";
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image";
import Styles from "./customers.module.css";

const Customers = () => {
    return (
        <section id={Styles.customers}>
            <Container>
                <Image src={CUSTOMERS} fluid/>
            </Container>
        </section>
    )
};

export default memo(Customers);
