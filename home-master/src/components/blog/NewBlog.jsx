import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { Jumbotron, Container } from "react-bootstrap";
import { Card, CardBody } from "reactstrap";
import "./Blog.css";

const NewBlog = () => {
  const [posts, setPosts] = useState({});

  const getPosts = async () => {
    const res = await axios.get(
      "https://v1.nocodeapi.com/mvshashank/medium/LltTJQWKVNbwKKlh"
    );
    console.log("RES", res.data);
    if (res.data) {
      setPosts(res.data);
    }
  };

  const getColumns = () => {
    let col1 = [];
    let col2 = [];

    _.isArray(posts) &&
      _.get(posts, "length") > 0 &&
      posts.map((info, index) => {
        if (index % 2 === 0) {
          col1.push(info);
        } else {
          col2.push(info);
        }
      });
    return { col1, col2 };
  };

  let { col1, col2 } = getColumns();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Jumbotron
      fluid
      className="jumbotron jumbotron-fluid m-0 pt-0"
      style={{ backgroundColor: "gray" }}
      id="projects"
    >
      <Container>
        <h1 className="display-4 mb-5 text-center">Blog</h1>
        <div className="container">
          <div className="row p-2 justify-content-between">
            {_.isArray(col1) &&
              col1.length > 0 &&
              col1.map((item) => {
                let htmlCode = _.get(item, "description");
                let imgUrl = htmlCode.match(/<img([\w\W]+?)>/g)[0];
                console.log("IMG", imgUrl);

                var re = /<img[^>]+src="https:\/\/([^">]+)/g;
                var results = re.exec(imgUrl);

                var result = htmlCode.replace(
                  /<p class="medium-feed-snippet"\b[^>]*>/gi,
                  ""
                );
                // result = "What a fine day it is</p>"
                console.log("PTAG", result);

                console.log("RES", results[1]);
                return (
                  <Card className="m-4 card-hover col-md-5">
                    <CardBody>
                      <div className="justify-content-center align-items-center">
                        <img
                          className="image-style mb-2"
                          src={`https://${results[1]}`}
                        />
                        <div className="d-flex flex-column justify-content-between">
                          <h4>{item.title}</h4>
                          <a href={item.link} target="_blank">
                            <h5>Click Here to read the article</h5>
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
            {_.isArray(col2) &&
              col2.length > 0 &&
              col2.map((item) => {
                let htmlCode = _.get(item, "description");
                let imgUrl = htmlCode.match(/<img([\w\W]+?)>/g)[0];
                console.log("IMG", imgUrl);

                var re = /<img[^>]+src="https:\/\/([^">]+)/g;
                var results = re.exec(imgUrl);

                var result = htmlCode.replace(
                  /<p class="medium-feed-snippet"\b[^>]*>/gi,
                  ""
                );
                // result = "What a fine day it is</p>"
                console.log("PTAG", result);

                console.log("RES", results[1]);
                return (
                  <Card className="m-4 card-hover col-md-5">
                    <CardBody>
                      <div className="">
                        <img
                          className="image-style img-fluid mb-2"
                          src={`https://${results[1]}`}
                        />
                        <div className="d-flex flex-column justify-content-between">
                          <h4>{item.title}</h4>
                          <a href={item.link} target="_blank">
                            <h5>Click Here to read the article</h5>
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default NewBlog;
