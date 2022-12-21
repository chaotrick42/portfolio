import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={true}
              title="Github Pages"
              description="Personal github pages"
              ghLink="https://github.com/chaotrick42/chaotrick42.github.io"
              demoLink="https://chaotrick42.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal blog page"
              ghLink="https://github.com/chaotrick42/portfolio"
              demoLink="https://chaotrick42.dev/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
