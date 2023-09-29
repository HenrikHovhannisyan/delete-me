import React, {memo} from "react";
import Image from "react-bootstrap/Image";

const Item = ({img, text}) => {
    return (
        <p className={'mb-2 d-flex align-items-center'}>
            <Image src={img} fluid/>
            <span className={'ms-3'}>{text}</span>
        </p>
    );
};

export default memo(Item);
