import React, {memo} from "react";
import PageHeader from "../../components/pageHeader/PageHeader";
import Box from "../../components/box/Box";
import Privacy from "./Privacy";
import Footer from "../../components/footer/Footer";
import Info from "./Info";
import CompanyMilestones from "./CompanyMilestones";
import Team from "./Team";

const AboutUs = () => {
    const component = () => <Privacy/>;
    return (
        <>
            <PageHeader title={'About us'}/>
            <Box content={component}/>
            <Info/>
            <CompanyMilestones/>
            <Team/>
            <Footer/>
        </>
    );
};

export default memo(AboutUs)
