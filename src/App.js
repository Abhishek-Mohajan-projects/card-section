import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import image1 from "./images/image1.jpg";
import "./App.css";

const Card = ({ image, name, designation }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Hero Image" />
      </div>
      <div className="card-body">
        <div>
          <h2>{name}</h2>
          <p>{designation}</p>
        </div>
        <div className="card-icons">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-icon"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-icon"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="card_header">
        <h4 className="card_title">Our Trainers</h4>
        <h1>Instructors</h1>
      </div>
      <div className="card-grid">
        <Card image={image1} name="John Doe" designation="Web Developer" />
        <Card image={image1} name="Jane Smith" designation="Graphic Designer" />
        <Card image={image1} name="Mike Johnson" designation="UI/UX Designer" />
        <Card
          image={image1}
          name="Sarah Wilson"
          designation="Software Engineer"
        />
      </div>
    </>
  );
};

export default App;
