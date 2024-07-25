import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  './projects.css'
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/projects/1.jpg";
import projImg2 from "../../assets/img/projects/2.jpeg";
import projImg3 from "../../assets/img/projects/3.jpg";
import projImg4 from "../../assets/img/projects/4.jpg";
import projImg5 from "../../assets/img/projects/5.jpeg";
import projImg6 from "../../assets/img/projects/6.jpg";


import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { Link } from "react-router-dom";


export const Projects = () => {

  const projects = [
    {
      title: "NETFLIX CLONE",
      description: "Design & Development",
      imgUrl: projImg1,
      siteUrl: "https://malzbanker.github.io/netflex/",
      githubUrl:
        "https://github.com/malzbanker/netflix-new",
    },
    {
      title: "APPLE WITH REACT",
      description: "APPLE WEBSITE REPLICA WITH REACT",
      imgUrl: projImg2,
      siteUrl: "https://mal-apple-react.netlify.app/",
      githubUrl:
        "https://github.com/malzbanker/apple-fulstack",
    },
    {
      title: "AMAZON CLONE",
      description: "Design & Development",
      imgUrl: projImg3,
      siteUrl: "https://malede-zbanker-amazon-appstor.netlify.app",
      githubUrl: "https://github.com/malzbanker/forem-project",
    },
    {
      title: "ZOOM REPLICA",
      description: "Design & Development",
      imgUrl: projImg4,
      siteUrl: "#",
      githubUrl:
        "https://github.com/malzbanker/",
    },
    {
      title: "APPLE WITH BOOTSTRAP",
      description: "APPLE WEBSITE REPLICA WITH BOOTSTRAP",
      imgUrl: projImg5,
      siteUrl: "https://apple-bootstrap-zmal.netlify.app/",
      githubUrl: "https://github.com/malzbanker/apple-bootstrap",
    },
    {
      title: "EVANGADI FORUM",
      description: "Design & Development",
      imgUrl: projImg6,
      siteUrl: "https://malede-forum.netlify.app/",
      githubUrl:
        "https://github.com/malzbanker/server-forem",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 style={{ paddingBottom: "40px" }}>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          I'am on the way
                          <br />
                          Thank you!
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I'am on the way
                          <br />
                          Thank you!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
