import React from "react";
import "./about.css";
import ME from "../../assets/cvresumEPIC.jpeg";
import { FaAward, FaUsers, FaFolderOpen, FaTrophy } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h2>ABOUT ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Coding Bootcamp Graduate</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3 and counting...</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>30+ and counting</small>
            </article>
             <article className="about__card">
              <FaTrophy className="about__icon" />
              <h5>Certificates</h5>
              <small>One</small>
            </article>
          </div>
          <p>

          Highly creative full stack web developer looking to apply knowledge, 
          
          problem solving skills and my commendable work ethic to overcome obstacles, 
          
          obtain goals, individually or collectively. 

          Please check out my GitHub.
  
          </p>
          <a href="#contact" className="btn btn-primary">
            Message me!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;