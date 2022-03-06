import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/CV_Federico_Esteban_Arnau.pdf"
import pd from "../../Assets/cv_image.jpg"
import { AiOutlineDownload } from "react-icons/ai";





function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Descargar curriculum
          </Button>
        </Row>

         <Row style={{ justifyContent: "center", position: "relative"}}> 
           
           <img src={pd} className="img-fluid"  alt="Imagen de Curriculum" /> 
           

         </Row> 




      </Container>
    </div>
  );
}

export default ResumeNew;
