import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";
import { Navbar,Nav, Container} from "react-bootstrap";
import logo from '../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import linkIn from '../assets/img/linkin.svg';
import github from '../assets/img/github.svg';
import facebook from '../assets/img/facebook.svg';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (window.scrollY > 50) {
            setScrolled(true);
        }else {
            setScrolled(false);
        }

        window.addEventListener("scroll", onscroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className="my-logo" src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'nav-bar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'nav-bar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'nav-bar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"> <a href="https://www.linkedin.com/in/quangtongdeveloper/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin } size="2x" />
                            </a></a>
                            <a href="#"><a href="https://github.com/QuangTong123" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="2x" /></a></a>
                            <a href="#"><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} size="2x" /></a></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                        
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}