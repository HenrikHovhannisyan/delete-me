import React, {memo} from "react";
import Styles from "./box.module.css";

const Box = ({content}) => {
    return (
        <section id={Styles.box}>
            {content()}
        </section>
    );
};

export default memo(Box);
