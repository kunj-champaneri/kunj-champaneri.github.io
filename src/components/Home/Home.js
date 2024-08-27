import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {
  return (
    <Container fluid className="home-section">
      <Container fluid>
        <Row className="align-items-center" style={{marginTop: "10rem"}}>
          <Col md={1}></Col>
          <Col md={5}>
            <h1 className="greeting">Hi There! <span role="img" aria-label="wave">👋</span></h1>
            <h2 className="name">I'm <strong>Kunj Champaneri</strong></h2>
            <p className="heading-description blockquote">
              A passionate and innovative software engineer with a strong foundation in building scalable, high-performance solutions.
            </p>
            <div className="heading-type">
                <TypeWriter />
            </div>
          </Col>
        <Col md={1}></Col>
        <Col md={4} className="d-flex justify-content-center align-items-center">
          <Button size="lg" variant="primary" className="resume-btn" href="https://drive.google.com/file/d/1xKDYf_WPWkKOpQifIgqjOAM9VNq2rpYq/view?usp=sharing" download target="_blank">
            <AiOutlineDownload />
            &nbsp;
            Download Resume
          </Button>
        </Col>
      </Row>
      <Row className="get-in-touch mt-5">
        <Col>
          <h1 className="text-center">Get in Touch</h1>
          <p className="text-center">
            Feel free to connect with me to explore opportunities, exchange ideas, or chat about the fascinating world of Software Engineering.
          </p>
          <SocialMedia />
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Home;
