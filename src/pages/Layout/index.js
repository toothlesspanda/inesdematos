import React from "react";
import { Container, Nav, Navbar, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Medium,
  Github,
  Instagram,
  ColumnsGap,
} from "react-bootstrap-icons";

const Layout = ({ title, children }) => {
  return (
    <div className="">
      <Container style={{ width: "100%", margin: "0 auto" }}>
        <Row tyle={{ width: "100%" }}>
          <Col>
            <div
              style={{
                fontWeight: 700,
                color: "white",
                padding: "16px 0",
              }}>
              {"Inês de Matos".toUpperCase()}
            </div>
          </Col>
          <Col>
            <Navbar
              bg="dark"
              variant="dark"
              style={{ justifyContent: "center" }}>
              <Nav>
                <Nav.Link className={title === "Home" ? "active" : ""}>
                  <Link to={"/"}>Home</Link>
                </Nav.Link>
                <Nav.Link
                  className={title === "About" ? "active" : ""}
                  href="/about">
                  <Link to={"/about"}>About me</Link>
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <div className="">
        <div className=""> {children} </div>
      </div>

      <div
        style={{
          width: "100%",
          position: "absolute",
          bottom: "0%",
          display: "contents",
        }}>
        <Container
          style={{
            justifyContent: "center",
            background: "rgba(33,37,41)",
            textAlign: "center",
          }}>
          <Row xs={1} md={4}>
            <Col>
              <a
                target="__blank"
                className="h6"
                href="https://www.linkedin.com/in/inesdematos/">
                <Linkedin className="h4 me-3" />
                <span>@inesdematos</span>
              </a>
            </Col>
            <Col>
              <a
                target="__blank"
                className="h6"
                href="https://inesdematos.medium.com/">
                <Medium className="h4 me-3" />
                <span>@inesdematos</span>
              </a>
            </Col>
            <Col>
              <a
                target="__blank"
                className="h6"
                href="https://github.com/toothlesspanda">
                <Github className="h4 me-3" />
                <span>@toothlesspanda</span>
              </a>
            </Col>
            <Col>
              <a
                target="__blank"
                className="h6"
                href="https://www.instagram.com/nenas.phot/">
                <Instagram className="h4 me-3" />
                <span>@nenas.phot</span>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
