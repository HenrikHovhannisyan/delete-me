import React, {memo} from "react";
import Styles from "./support.module.css";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/pageHeader/PageHeader";
import Search from "./Search";
import Box from "../../components/box/Box";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Support = () => {
    const component = () => <Search/>;
    return (
        <>
            <PageHeader title={'Support'}/>
            <Container>
                <Col lg={9} className={'m-auto'}>
                    <Box class_name={Styles.box} content={component}/>
                </Col>
            </Container>
            <Footer/>
        </>
    );
};

export default memo(Support);
