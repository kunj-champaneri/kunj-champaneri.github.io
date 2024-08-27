import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCards from "./ExperienceCards";
import { EXPERIENCES } from "../../Constants";
import "./Experience.css";

function Experiences() {
  return (
    <Container fluid className="experience-section">
      <Row>
        {EXPERIENCES.map((experience, index) => (
          <Col md={4} key={index}>
            <ExperienceCards 
              company={experience.company}
              title={experience.title}
              duration={experience.duration}
              details={experience.details}
              image={experience.image}
              bgColor={experience.bgColor}
              borderColor={experience.borderColor}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Experiences;
