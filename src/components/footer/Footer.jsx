import React, {memo} from "react";
import Styles from "./footer.module.css";
import Container from "react-bootstrap/Container";
import LOGO from "./../../assets/img/logo.png"
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import {Link} from "react-router-dom";
import Facebook from "./../../assets/img/icons/f.png";
import Twitter from "./../../assets/img/icons/t.png";
import LinkedIn from "./../../assets/img/icons/l.png";


const Footer = () => {
    return (
        <section id={Styles.footer}>
            <Container fluid>
                <footer className="page-footer font-small blue pt-4">
                    <Container>
                        <Row>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <p className={Styles.footer_company}>Company</p>
                                <Image src={LOGO} fluid/>
                                <p className={Styles.footer_text}>
                                    Lorem Ipsum is simply dummy text of the printing <br/>
                                    and typesetting industry. Lorem Ipsum has been <br/>
                                    the industry's standard dummy text ever since the 1500s.
                                </p>
                                <Link to={"#"} className={'m-1'}>
                                    <Image src={Facebook}/>
                                </Link>
                                <Link to={"#"} className={'m-1'}>
                                    <Image src={Twitter}/>
                                </Link>
                                <Link to={"#"} className={'m-1'}>
                                    <Image src={LinkedIn}/>
                                </Link>
                            </div>

                            <div className="col-md-3 mb-md-0 mb-3">
                                <ul>
                                    <li><Link className={Styles.footer_list_item} to={"#"}>How we work</Link></li>
                                    <li><Link className={Styles.footer_list_item} to={"#"}>Pricing</Link></li>
                                    <li><Link className={Styles.footer_list_item} to={"#"}>DIY Opt-Out Guides</Link>
                                    </li>
                                    <li><Link className={Styles.footer_list_item} to={"#"}>Business</Link></li>
                                    <li><Link className={Styles.footer_list_item} to={"#"}>Blog</Link></li>
                                    <li><Link className={Styles.footer_list_item} to={"#"}>About us</Link></li>
                                    <li><Link className={Styles.footer_list_item} to={"#"}>FAQs</Link></li>
                                </ul>
                            </div>

                            <div className="col-md-3 mb-md-0 mb-3">
                                <ul>
                                    <li><Link className={Styles.footer_list_item} to={"#"}>Support</Link></li>
                                    <li><Link className={Styles.footer_list_item} to={"#"}>Contacts</Link></li>
                                    <li><Link className={Styles.footer_list_item} to={"#"}>Status</Link></li>
                                    <li><Link className={Styles.footer_list_item} to={"#"}>API</Link></li>
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </footer>
            </Container>
        </section>
    );
};

export default memo(Footer)