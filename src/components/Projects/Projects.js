import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">proyectos </strong>
        </h1>
        <Row  style={{ justifyContent: "center", paddingBottom: "150px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              title="Sector en construccion"
            />
          </Col>         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
