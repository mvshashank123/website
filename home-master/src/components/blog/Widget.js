import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./Widget.css";

const Widget = () => {

  return (
    <Jumbotron
      fluid
      id="blogs"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      <Container className="">
        <h2 className="display-4 pb-5 text-center">Latest Articles</h2>
      </Container>
    </Jumbotron>
  );
};

export default Widget;
