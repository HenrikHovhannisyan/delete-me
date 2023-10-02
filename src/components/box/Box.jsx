import React, {memo} from "react";
import Styles from "./box.module.css";

const Box = ({content, class_name}) => {
    return (
        <section className={class_name} id={Styles.box}>
            {content()}
        </section>
    );
};

export default memo(Box);
