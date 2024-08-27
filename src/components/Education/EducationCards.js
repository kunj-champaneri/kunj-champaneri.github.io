import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

function EducationCards(props) {
  return (
    <Card className="education-card h-100 mb-4">
      <Card.Header style={{ backgroundColor: props.bgColor }} className="education-card-header">
        <Card.Title className="text-center text-white institution-title">{props.institution}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row >
          <Col xs={12} md={4} className="text-center">
            <Image src={props.image} alt={props.institution} className="institution-logo" style={{borderColor: props.borderColor || "none"}} roundedCircle />
          </Col>
          <Col xs={12} md={8} className="text-center text-md-left">
            <h3 className="degree mb-1">{props.degree}</h3>
            <p className="date mb-0">{props.duration}</p>
          </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <ul className="details">
                {props.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </Col>
            
          </Row>
      </Card.Body>
    </Card>
  );
}
export default EducationCards;
