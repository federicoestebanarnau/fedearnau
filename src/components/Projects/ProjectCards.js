import React from "react";
import Card from "react-bootstrap/Card";
import { GoTools } from "react-icons/go"

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title><GoTools/>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
           
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
