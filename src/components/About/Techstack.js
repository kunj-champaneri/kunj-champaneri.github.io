import React from "react";
import { Container } from 'react-bootstrap';

function Techstack(props) {
  return (
    <>
      <Container className="skills-container">
      <h2 className="skills-title">{props.name}</h2>
      <div className="skills-grid">
        {props.skills.map((skill, index) => (
          <div key={index} className="skill-badge-container">
            <span className="skill-badge">{skill}</span>
          </div>
        ))}
      </div>
    </Container>
    </>
  );
}

export default Techstack;
