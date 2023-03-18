import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { images } from "../models/importPic";
//import { HashLink } from 'react-router-hash-link';
/*import {
  BrowserRouter as Router
} from "react-router-dom";*/

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
    //<Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={images['./logo-portfolio3.png']} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              {/* <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link> */}
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/P-Kittisak"><img src={images['./git-icon2.png']} alt="" /></a>
                <a href="https://www.facebook.com/pond.tintongkob/" target="_blank"><img src={images['./nav-icon2.svg']} alt="" /></a>
                {/* <a href="#"><img src={images['./nav-icon3.svg']} alt="" /></a> */}
              </div>
              { //<HashLink to='#connect'>
                <a href='https://drive.google.com/file/d/1HY01o6jl5gNcMAKZJtvsMCr3PzeM-GiQ/view?usp=sharing' target={'_blank'}><button className="vvd"><span>Resume</span></button></a>
              //</span></HashLink> 
            }
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    //</Router>
  )
}

