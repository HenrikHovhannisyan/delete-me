import React, {memo} from "react";
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Styles from "./support.module.css";
import Col from "react-bootstrap/Col";

const Search = () => {
    return (
        <Container className={Styles.search_container}>
            <Form>
                <Row>
                    <Form.Group as={Col} lg="9" className={'m-auto'}>
                        <Form.Control type="text" placeholder="Search" className={Styles.search_input}/>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    );
};

export default memo(Search);
