import React from "react";
import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl}) => {
    return (
        <Col size={12} sm={8} md={6}>
            <card>
                <a href={imgUrl} target="_blank">
                    <div className="proj-imgbx">
                        <img src={imgUrl} style={{ width: '100%', height: '500px' }}/>
                            <div className="proj-txtx">
                                <h1>{title}</h1>
                                <h2>{description}</h2>
                            </div>
                    </div>
                </a>
            </card>
        </Col>
    )
}