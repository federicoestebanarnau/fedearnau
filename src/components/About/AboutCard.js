import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Mi nombre es <span className="purple">Federico Esteban Arnau </span>
            soy de <span className="purple"> Tucuman, Argentina.</span>
            <br />
            Soy un estudiante <span className="purple">autodidacta </span>
            que se interesa por la tecnología{" "}
            <span className="purple">Frontend </span>.
            <br />
            <br />
            Además de programar me gusta:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Actividades deportivas
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Animales
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
