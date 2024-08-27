import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kunj Champaneri </span>
            <br />
            I am a dedicated software engineer with a strong background in full-stack development, cloud infrastructure, and performance optimization. My passion lies in building scalable, user-centric solutions that solve complex problems. I thrive in collaborative environments and am always eager to learn and embrace new challenges.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
