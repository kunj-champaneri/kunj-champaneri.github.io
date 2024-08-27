import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";
import "./Projects.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        </Container>
        <Container className="project-card-container">
          <Row>
            {PROJECTS.map((project, index) => (
              <Col md={4} key={index} style={{marginBottom: "1rem"}}>
                <ProjectCard
                  name={project.name}
                  title={project.title}
                  duration={project.duration}
                  details={project.details}
                  image={project.image}
                  bgColor={project.bgColor}
                  borderColor={project.borderColor}
                  url={project.url}
                  technology={project.technology}
                />
              </Col>
            ))}
          </Row>
        </Container>
    </Container>
  );
}

export default Projects;
