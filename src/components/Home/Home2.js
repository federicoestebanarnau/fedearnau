import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import yo from "../../Assets/yo.jpeg";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> Me presento </span> 
            </h1>
            <p className="home-about-body">
               Gracias a mi antigua carrera (arquitectura) y la tecnologias,
               surgio mi amor por el diseño en paginas webs, lo que me inpiro 
               a convertirme en un <b className="purple">frontend developer</b>
              <br />
              <br />
              Tengo un gran interes por la creacion y modificacion de 
              <i>
                <b className="purple"> paginas webs y mobiles </b> 
                y tambien por conocer los {" "}
                <b className="purple"> 
                   lenguajes de programacion en su estado puro.
                </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt >
              <img style={{borderRadius: "50%", marginBottom:"15px"}}src={yo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>
              Encuentrame en mis  <span className="purple">redes sociales </span>
            </h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/federicoestebanarnau"
                  
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/fedear13"
                  
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/federicoestebanarnau/"
                  
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fedearnau/"
                  
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
