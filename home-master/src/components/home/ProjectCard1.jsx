import React from "react";
import "./Project.css";

const ProjectCard = (props) => {

  return (
    <div className="cards__item">
      <a className="cards__item__link" href={props.link} target="_blank">
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img className="cards__item__img" src={props.src} alt="" />
        </figure>
        <figure className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </figure>
      </a>
    </div>
  );
};

export default ProjectCard;
