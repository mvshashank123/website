import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const NewBlog = () => {
  return (
    <Jumbotron
      fluid
      className="jumbotron jumbotron-fluid m-0 pt-0"
      style={{ backgroundColor: "gray" }}
      id="projects"
    >
      <Container>
      <h1 style={{position: "relative", top: '80px'}} className="display-4 mb-5 text-center">Blog</h1>
        <div class="sk-ww-medium-publication-feed" data-embed-id="79032"></div>{" "}
      </Container>
    </Jumbotron>
  );
};

export default NewBlog;
