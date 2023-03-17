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
                            <a href=""><img src={images['./nav-icon1.svg']} /></a>
                            <a href=""><img src={images['./nav-icon2.svg']} /></a>
                            <a href=""><img src={images['./nav-icon3.svg']} /></a>
                        </div>
                        <p>CopyRight 2022. Kittisak Tintongkob</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}