import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/logo.png';
import {memo} from "react";
import {NavLink} from "react-router-dom";
import Styles from './navbar.module.css';

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
                        <NavLink to={'/how-we-work'} className={`nav-link ${Styles.nav_link}`}>How we work</NavLink>
                        <NavLink to={'/pricing'} className={`nav-link ${Styles.nav_link}`}>Pricing</NavLink>
                        <NavLink to={'/5'} className={`nav-link ${Styles.nav_link}`}>DIY Opt-Out Guides</NavLink>
                        <NavLink to={'/5'} className={`nav-link ${Styles.nav_link}`}>Business</NavLink>
                        <NavLink to={'/5'} className={`nav-link ${Styles.nav_link}`}>Blog</NavLink>
                        <NavLink to={'/5'} className={`nav-link ${Styles.nav_link}`}>About us</NavLink>
                        <NavLink to={'/5'} className={`nav-link ${Styles.nav_link}`}>Support</NavLink>
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