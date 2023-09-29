import React, {memo} from "react";
import Styles from "./protectionPlans.module.css";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import {TABLE_INFO} from "../../config/data";
import TableTr from "./TableTr";
import Container from "react-bootstrap/Container";

const ProtectionPlans = () => {
    return (
        <section id={Styles.protectionPlans}>
            <Container>
                <Col lg={6} className={'m-auto text-center'}>
                    <h2 className={Styles.protectionPlans_title}>All <span>LogoName</span> Protection Plans</h2>
                    <p className={Styles.protectionPlans_text}>Choose the plan that works for you and your family</p>
                </Col>
                <Col lg={8} className={Styles.protectionPlans_table}>
                    <Table striped responsive>
                        <thead>
                        <tr>
                            <th className={Styles.protectionPlans_table_title}>Plan Type</th>
                            <th className={Styles.protectionPlans_table_title}>1 Year</th>
                            <th className={Styles.protectionPlans_table_title}>2 Years</th>
                        </tr>
                        </thead>
                        <tbody>

                        {TABLE_INFO.map((e) => {
                            return <TableTr key={e.id} title={e.title} sum={e.sum} info={e.info} save={e.save}
                                            sum_1={e.sum_1} info_1={e.info_1} save_1={e.save_1}/>
                        })}

                        <tr>
                            <td className={Styles.protectionPlans_table_header}>DeleteMe for Business</td>
                            <td className={Styles.protectionPlans_table_learn}>LEARN MORE</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <p className={Styles.protectionPlans_info}>
                    U.S. residents only. All plans automatically renew unless canceled before renewal date.
                </p>
            </Container>
        </section>
    );
};

export default memo(ProtectionPlans);
