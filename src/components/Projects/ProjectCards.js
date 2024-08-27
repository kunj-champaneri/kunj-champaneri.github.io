import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card project-card-spacing h-100 mb-4">
      <Card.Header style={{ backgroundColor: props.bgColor }} className="project-card-header">
        <Card.Title className="text-center text-white name-title">{props.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        {/* <Row >
          <Col xs={12} md={4} className="text-center">
            <Image src={props.image} alt={props.company} className="company-logo" style={{borderColor: props.borderColor || "none"}} roundedCircle />
          </Col>
          <Col xs={12} md={8} className="text-center text-md-left">
            <h3 className="title mb-1">{props.title}</h3>
            <p className="date mb-0">{props.duration}</p>
          </Col>
          </Row> */}
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <h3 className="title mb-1">{props.title}</h3>
              <p className="date mb-0">{props.duration}</p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <ul className="details">
                {props.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
                <li><strong>Technologies:</strong> {props.technology}</li>
              </ul>
            </Col>
            
          </Row>
          {
            props.url && 
            <Row className="mt-auto">
              <Col className="text-center">
                <Button variant="primary" href={props.url} target="_blank">
                  View Project
                </Button>
              </Col>
            </Row>
          }
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
