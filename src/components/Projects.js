import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { images2 } from "../models/importPic";
import { images } from "../models/importPic";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import projImg1 from "../assets/img/1Admin-หน้าจัดการหมวดหมู่สินค้า.png";
// import projImg2 from "../assets/img/4Admin-หน้าจอคำร้องขอเพิ่มชุมชน.png";
// import projImg3 from "../assets/img/4ชุมชน-หน้าจอสินค้าชุมชน.png";
// import projImg4 from "../assets/img/7Admin-หน้าจอจัดการค่าส่งกรุงเทพ.png";
// import projImg5 from "../assets/img/Shop-หน้าจอจัดการสินค้าชุมชน.png";
// import projImg6 from "../assets/img/Shop-หน้าจัดการคำสั่งซื้อ.png";
// import projImg7 from "../assets/img/User-หน้าเข้าสู่ระบบ.png";

export const Projects = () => {

    const projects = [
      {
        title: "ตัวอย่างโปรเจค",
        description: "Admin : หน้าจัดการหมวดหมู่สินค้า",
        imgUrl: images2['./1Admin-หน้าจัดการหมวดหมู่สินค้า.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "Admin : หน้าจอจัดการค่าส่งกรุงเทพ",
        imgUrl: images2['./7Admin-หน้าจอจัดการค่าส่งกรุงเทพ.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "Admin : หน้าจอแสดงคำร้องขอเพิ่มชุมชน",
        imgUrl: images2['./4Admin-หน้าจอคำร้องขอเพิ่มชุมชน.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "หน้าเข้าสู่ระบบ",
        imgUrl: images2['./User-หน้าเข้าสู่ระบบ.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "หน้าค้นหาสินค้าpng",
        imgUrl: images2['./User-หน้าค้นหาสินค้าpng.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "User : หน้าจอตะกร้าสินค้าแบบไม่มีสินค้า",
        imgUrl: images2['./User-หน้าจอตะกร้าสินค้าแบบไม่มีสินค้า.png'],
      },
    ];
    const projects2 = [
      {
        title: "ตัวอย่างโปรเจค",
        description: "หัวหน้าชุมชน : หน้าจอแสดงโปรไฟล์ชุมชน",
        imgUrl: images2['./6ชุมชน-หน้าจอแสดงโปรไฟล์ชุมชน.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "หัวหน้าชุมชน : หน้าจอสรุปยอดขายสินค้า",
        imgUrl: images2['./9ชุมชน-หน้าจอสรุปยอดขายสินค้า.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "หัวหน้าชุมชน : หน้าจอสมาชิกชุมชน",
        imgUrl: images2['./3ชุมชน-หน้าจอสมาชิกชุมชน.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "หัวหน้าชุมชน : หน้าจอสินค้าชุมชนทั้งหมด",
        imgUrl: images2['./4ชุมชน-หน้าจอสินค้าชุมชน.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "หัวหน้าชุมชน : หน้าจอแสดงที่อยู่ชุมชน",
        imgUrl: images2['./5ชุมชน-หน้าจอแสดงที่อยู่ชุมชน.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "หน้าจอเปลี่ยนรหัสผ่าน",
        imgUrl: images2['./หน้าจอเปลี่ยนรหัสผ่าน.png'],
      },
    ];
    const projects3 = [
      {
        title: "ตัวอย่างโปรเจค",
        description: "ร้านค้า : หน้าจอจัดการสินค้าชุมชน",
        imgUrl: images2['./Shop-หน้าจอจัดการสินค้าชุมชน.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "ร้านค้า : หน้าจอเพิ่มสินค้าชุมชน",
        imgUrl: images2['./Shop-หน้าจอเพิ่มสินค้าชุมชน.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "ร้านค้า : หน้าจัดการคำสั่งซื้อ",
        imgUrl: images2['./Shop-หน้าจัดการคำสั่งซื้อ.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "หน้าจอรายละเอียดสินค้า",
        imgUrl: images2['./User-หน้าจอรายละเอียดสินค้า.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "User : หน้าเพิ่มที่อยู่",
        imgUrl: images2['./User-หน้าเพิ่มที่อยู่.png'],
      },
      {
        title: "ตัวอย่างโปรเจค",
        description: "User : หน้าเพิ่มสินค้าลงตะกร้า",
        imgUrl: images2['./User-หน้าเพิ่มสินค้าลงตะกร้า.png'],
      },
    ];

    return(
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>ตัวอย่างโปรเจคจบ ปี 4</h2>
              <br></br>
              {/* <p>Test.........................</p> */}
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return(
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {
                        projects2.map((project, index) => {
                          return(
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {
                        projects3.map((project, index) => {
                          return(
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={images['./color-sharp2.png']}></img>
      </section>
    )
  }