import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Patrick Parthen </span>
            from <span className="purple"> Hanover, Germany.</span>
            <br />I am a full-stack on MERN, trying my best to become a senior soon
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports of all kind
            </li>
            <li className="about-activity">
              <ImPointRight /> Beeing outside
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programming istn't about what you know, it's about what you can figure out!"{" "}
          </p>
          <footer className="blockquote-footer">Some smart beeing</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
