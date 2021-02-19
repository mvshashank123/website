import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import "./Project1.css";
import amazon from "./images/amazon.png";
import covidtr from "./images/covidtr.png";
import messaging from "./images/messaging.png";
import netflix from "./images/netflix.png";
import spotify from "./images/spotify.png";

const Project = () => {
  return (
    <div
      id="projects"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "gray" }}
    >
      <div className="cards__container">
          <h1 className="display-4 mb-5 text-center">Projects</h1>
      
        <div className="cards__wrapper">
          <ul className="cards__items">
            <div>
              <ProjectCard
                src={covidtr}
                text="COVID-19 Tracker"
                label="Live Demo"
                link="https://covid-19-tracker-76b59.web.app/"
              />
              <ProjectCard
                src={amazon}
                text="Amazon Clone"
                label="Live Demo"
                link="https://clone-7d06d.web.app/"
              />
              <ProjectCard
                src={spotify}
                text="Spotify Clone"
                label="Github"
                link="https://github.com/mvshashank123/Spotify-Clone"
              />
            </div>
            <div>
              <ProjectCard
                src={netflix}
                text="Netflix Clone"
                label="Live Demo"
                link="https://netflix-clone-6842f.web.app/"
              />
              <ProjectCard
                src={messaging}
                text="Messaging Application"
                label="Github"
                link="https://messaging-app-c260d.web.app/"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
