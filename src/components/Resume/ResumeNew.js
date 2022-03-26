import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfCv from "../../Assets/cv.pdf";
import cvImg from "../../Assets/cv-img.jpeg";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdfCv} target="_blank">
            <AiOutlineDownload />
            &nbsp;Descargar currículum
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <img src={cvImg} className="img-fluid" alt="Imagen de Curriculum" />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
