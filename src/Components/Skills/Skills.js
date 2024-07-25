

import React, { useState } from "react";
import gash from "../../assets/img/gash.png";
import gash1 from "../../assets/img/gash1.png";
import { Col, Row, Container } from "react-bootstrap";
import gashaw from '../../pages/Resume/Gashaw Resume.pdf'
import skill from "./skills.css";

export const Skills = () => {
  const [bar, setBar] = useState(false);

  // const show= ()=>{
  //   setBar(!bar)
  // }

  return (
    <section className="bg-white skill" id="skills">
      <Container fluid>
        <Row>
          <Col
            // md={{ order: "last", span: 6 }}
            // xs={12}
            className="d-md-flex first-col"
          >
            <div
            // className={` ${bar ? "skill_bar" : "skill__both"}`}
            // onClick={show}
            >
              <div className="skill__one">
                {/* about */}
                <h1>About me </h1>
                <p>
                 
I am a dedicated Full Stack Web Developer located in Ethiopia, with a strong passion for my craft.
As a full-stack developer, I am eager to apply my skills in creating engaging and compliant websites. I am detail-oriented, adept at understanding project requirements, and enthusiastic about collaborating with team members to deliver projects on time. Although I am just starting in the field, I am committed to learning and growing through hands-on experience and continuous learning.


                </p>
                <p>
                  {" "}
                  Driven by self-motivation and equipped with robust organizational and time management skills, I consistently strive for excellence in all endeavors. Continual skill enhancement is a cornerstone of my approach, as I remain committed to refining my capabilities and enhancing the quality of my work.
                </p>
              </div>
              <div className="skill__two">
                {/* skill */}
                <h1>Skills</h1>
                <div className="skill__list">
                  <ul>
                    <li>HTML</li>
                    <li>React</li>
                    <li>Shopify</li>
                    <li>MongoDB</li>
                    <li> FireBase</li>
                  </ul>
                  <ul>
                    <li>CSS</li>
                    <li>JSX</li>
                    <li>JQuery</li>
                    <li>PHP</li>
                  </ul>
                  <ul>
                    <li>Bootstrap</li>
                    <li>REST API</li>
                    <li>Node</li>
                    <li>API</li>
                  </ul>
                  <ul>
                    <li>JavaScript</li>
                    <li>Express</li>
                    <li>Mysql</li>
                    <li>JSON</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>

          <Col md={{ span: 6, order: "first" }} xs={12} className="d-md-flex">
            <div className="maincontainer">
              <div className="thecard">
                <div className="thefont">
                  <img src={gash} alt="mal" />
                </div>
                <div className="theback">
                  <img src={gash1} alt="mam" />
                </div>
              </div>
            </div>
          </Col>
          <div className="resume">
            <div className="resume-center">
            <h1>View my resume</h1>
            <p>Detailed resume can be downloaded right below.</p>
            <a href={gashaw} target="_blank" ><button className="resume-btn">DOWNLOAD RESUME</button></a>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};
