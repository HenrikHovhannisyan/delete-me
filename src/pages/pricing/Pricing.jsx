import React, {memo} from "react";
import Styles from "./pricimg.module.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import PersonalData from "../../components/personalData/PersonalData";
import Customers from "../../components/customers/Customers";
import Footer from "../../components/footer/Footer";
import Container from "react-bootstrap/Container";
import Box from "../../components/box/Box";
import PricingList from "../../components/pricingList/PricingList";
import ProtectionPlans from "../../components/protectionPlans/ProtectionPlans";

const Pricing = () => {
    const component = () => <PricingList/>;
    return (
        <>
            <PageHeader _class={Styles.banner_text} title={'SAVE MORE WITH OUR BEST VALUE AND'}
                        text={'MOST POPULAR LOGO NAME PLANS'}/>
            <Box content={component}/>
            <ProtectionPlans/>
            <Customers/>
            <Container>
                <PersonalData d_none={Styles.d_none} order={Styles.order}/>
            </Container>
            <Footer/>
        </>
    );
};

export default memo(Pricing);
