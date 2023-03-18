import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import { images } from "../models/importPic";
// import logo from "../assets/img/logo.svg";
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    {/* <MailchimpForm /> */}
                    {/* <Col sm={6}>
                        <img src={images['./logo.svg']} alt="Logo" />
                    </Col> */}
                    <Col sm={12} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://github.com/P-Kittisak"><img src={images['./git-icon2.png']} /></a>
                            <a href="https://www.facebook.com/pond.tintongkob/"><img src={images['./nav-icon2.svg']} /></a>
                        </div>
                        <p>Portfolio By Kittisak Tintongkob</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}