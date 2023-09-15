import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/logo.png';
import Styles from './navbar.module.css';
import {memo} from "react";

function NavBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} className="d-inline-block align-top" alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle className={"bg-light"} aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className={Styles.nav_link} href="#">How we work</Nav.Link>
                        <Nav.Link className={Styles.nav_link} href="#">Pricing</Nav.Link>
                        <Nav.Link className={Styles.nav_link} href="#">DIY Opt-Out Guides</Nav.Link>
                        <Nav.Link className={Styles.nav_link} href="#">Business</Nav.Link>
                        <Nav.Link className={Styles.nav_link} href="#">Blog</Nav.Link>
                        <Nav.Link className={Styles.nav_link} href="#">About us</Nav.Link>
                        <Nav.Link className={Styles.nav_link} href="#">Support</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link className={`${Styles.btn_login} ${Styles.btn_nav}`} href="#">Login</Nav.Link>
                        <Nav.Link className={`${Styles.btn_join} ${Styles.btn_nav}`} href="#">Join Now</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default memo(NavBar);