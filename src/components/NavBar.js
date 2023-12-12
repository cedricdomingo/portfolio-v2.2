import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/navbar-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about-me" className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about-me')}>About Me</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <div className="navbar-text">
              <span className="social-icon">
                <a href="https://www.linkedin.com/in/allencedricdomingo/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
              </span>
              <span className="social-icon">
                <a href="https://github.com/cedricdomingo" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
              </span>
            </div>
            <div className="navbar-text">
              <HashLink smooth to="#connect">
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}