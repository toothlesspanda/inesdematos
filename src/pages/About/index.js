import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import Layout from "../Layout";

const About = ({}) => {
  return (
    <Layout title="About">
      <Container
        style={{
          height: "87%",
          top: "7%",
          color: "white",
          maxWidth: "100%",
          padding: "20px",
          marginTop: "25px",
        }}>
        <Row style={{ height: "100%" }}>
          <Col lg={3} className={"my-auto mx-auto"}>
            <Figure style={{ position: "relative" }}>
              <Figure.Image
                style={{
                  border: "2px solid rgba(250,208,55,1)",
                  position: "relative",
                }}
                roundedCircle
                src="profile.png"></Figure.Image>
              <div
                style={{
                  borderRadius: "50%",
                  zIndex: 2,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: "7px",
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0) 18%, rgb(0, 0, 0) 67.81%, rgb(0, 0, 0) 63%)",
                  opacity: "0.6",
                }}></div>
            </Figure>
          </Col>
          <Col
            style={{
              background: "rgba(0,0,0,0.3)",
              padding: "50px",
            }}
            lg={8}
            className={"my-auto"}>
            <Row>
              <Col>
                <h3>Hi!</h3>
                <p>
                  I am a Portuguese gal passionate about her work. I love topics
                  around backend, good practices, developer experience,
                  leadership and people's behavior.
                  <br />
                  <br />
                  I am a foodie and a sleeper. For hobbies, I like to
                  photograph, write, draw and explore new sports.
                  <br />
                  <br />
                  For tv shows, I am obsessed with sci-fi content and I love to
                  listen to EDM and Indie Rock music.
                </p>
              </Col>
            </Row>
            <div
              style={{
                width: "100%",
                height: "1px",
                margin: "25px 0",
                background: "#FAD02C",
              }}
            />
            <Row>
              <Col>
                <h2>Experience</h2>
                <span>
                  <span style={{ color: "#FAD02C" }}>•</span> Software Developer
                  @ Web Summit{" "}
                </span>
                <br />
                <span>
                  <span style={{ color: "#FAD02C" }}>•</span> Collaborator @ As
                  Raparigas do Código
                </span>{" "}
                <br />
                <span>
                  <span style={{ color: "grey" }}>•</span> Software Developer @
                  Talkdesk
                </span>
                <br />
                <span>
                  <span style={{ color: "grey" }}>•</span> Consultant @ everis
                </span>
                <br />
                <span>
                  <span style={{ color: "grey" }}>•</span> Junior Researcher @
                  Lasige - FCUL
                </span>
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    margin: "25px 0",
                    background: "#FAD02C",
                  }}
                />
                <h2>Education</h2>
                <span>
                  <span style={{ color: "grey" }}>•</span> Masters in
                  Information @ FCUL, Portugal
                </span>
                <br />
                <span>
                  <span style={{ color: "grey" }}>•</span> BSc in Information
                  Technology @ FCUL, Portugal
                </span>
              </Col>
              <Col>
                <h2>Publications</h2>
                <p>
                  <a href="https://repositorio.ul.pt/handle/10451/30934">
                    Semantic content analysis supporting web accessibility
                    evaluation
                  </a>
                  <br />
                  2018 - 15th International Web for All Conference (paper
                  winner)
                </p>
                <p>
                  <a href="https://repositorio.ul.pt/handle/10451/30934">
                    Screw-semantic content analysis for repair and evaluation of
                    web accessibility
                  </a>
                  <br />
                  2017 - MSc Thesis
                </p>
                <p>
                  <a href="https://repositorio.ul.pt/handle/10451/30934">
                    Development technologies impact in web accessibility
                  </a>
                  <br />
                  2016 - 13th International Web for All Conference
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default About;
