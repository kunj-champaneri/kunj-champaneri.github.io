import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCards from "./EducationCards";
import { EDUCATION } from "../../Constants";
import "./Education.css"

function Experiences() {
  return (
    <Container fluid className="education-section">
      <Container>
        <Row>
          {EDUCATION.map((education, index) => (
            <Col md={6} key={index} style={{marginBottom: "1rem"}}>
              <EducationCards 
                degree={education.degree}
                institution={education.institution}
                duration={education.duration}
                details={education.details}
                image={education.image}
                bgColor={education.bgColor}
                borderColor={education.borderColor}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experiences;
