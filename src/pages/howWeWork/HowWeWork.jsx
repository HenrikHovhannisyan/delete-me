import React, {memo} from "react";
import Footer from "../../components/footer/Footer";
import Does from "../../components/does/Does";
import Customers from "../../components/customers/Customers";
import PageHeader from "../../components/pageHeader/PageHeader";
import Box from "../../components/box/Box";

const HowWeWork = () => {
    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.';
    const video = () => {
        return (
            <iframe width="100%" height="525"
                    src="https://www.youtube.com/embed/7PIji8OubXU?si=n6yc1jOvo1sMW5hS"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
            </iframe>
        );
    };

    return (
        <>
            <PageHeader title={'Your Personal Data is'} text={text}/>
            <Box content={video}/>
            <Does/>
            <Customers/>
            <Footer/>
        </>
    );
};

export default memo(HowWeWork);
