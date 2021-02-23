import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard1 from "./ProjectCard1";
import "./Project1.css";
import amazon from "./images/amazon.png";
import covidtr from "./images/covidtr.png";
import messaging from "./images/messaging.png";
import netflix from "./images/netflix.png";
import spotify from "./images/spotify.png";
import { Jumbotron } from "react-bootstrap";

const Project = () => {
  return (
    <Jumbotron
      fluid
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "gray" }}
      id="projects"
    >
      <Container>
        <h1 className="display-4 mb-5 text-center">Projects</h1>
        <Row className="row__project">
          <ProjectCard1
            src={covidtr}
            text="COVID-19 Tracker"
            label="Live Demo"
            link="https://covid-19-tracker-76b59.web.app/"
          />

          <ProjectCard1
            src={amazon}
            text="Amazon Clone"
            label="Live Demo"
            link="https://clone-7d06d.web.app/"
          />
        </Row>
        <Row>
          <ProjectCard1
            src={netflix}
            text="Netflix Clone"
            label="Live Demo"
            link="https://netflix-clone-a0097.web.app/"
          />
          <ProjectCard1
            src={spotify}
            text="Spotify Clone"
            label="Github"
            link="https://github.com/mvshashank123/Spotify-Clone"
          />
        </Row>
        <Row>
          <ProjectCard1
            src={messaging}
            text="Messaging Application"
            label="Github"
            link="https://messaging-app-c260d.web.app/"
          />
        </Row>
        {/* <ul className="cards__items">
          <div>
            <ProjectCard1
              src={covidtr}
              text="COVID-19 Tracker"
              label="Live Demo"
              link="https://covid-19-tracker-76b59.web.app/"
            />
            <ProjectCard1
              src={amazon}
              text="Amazon Clone"
              label="Live Demo"
              link="https://clone-7d06d.web.app/"
            />
            <ProjectCard1
              src={spotify}
              text="Spotify Clone"
              label="Github"
              link="https://github.com/mvshashank123/Spotify-Clone"
            />
          </div>
          <div>
            <ProjectCard1
              src={netflix}
              text="Netflix Clone"
              label="Live Demo"
              link="https://netflix-clone-6842f.web.app/"
            />
            <ProjectCard1
              src={messaging}
              text="Messaging Application"
              label="Github"
              link="https://messaging-app-c260d.web.app/"
            />
          </div>
        </ul> */}
      </Container>
    </Jumbotron>
  );
};

export default Project;
