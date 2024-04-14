import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Tajmahal from "../../Assets/Projects/tajmahal.jpeg";
import Twitter from "../../Assets/Projects/Twitter.png";
import MovieU from "../../Assets/Projects/MovieU.png";
import Instgram from "../../Assets/Projects/instrgram.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieU}
              isBlog={false}
              title="MovieU"
              description="MovieU is a feature-rich movie website developed using React.js with lazy loading, real-time movie data integration from themoviedb, and a responsive UI for laptops and mobile devices."
              ghLink="https://github.com/jatinnarang22/movieU"
              demoLink="https://movieu.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Instgram}
              isBlog={false}
              title="Instgram Clone"
              description="An Instagram clone is a full-stack application using the MERN stack, providing user authentication, a responsive interface for media sharing, and MongoDB for database management, similar to the features implemented in the described project."
              ghLink="https://github.com/jatinnarang22/instagram-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Twitter}
              isBlog={false}
              title="Twitter Clone"
              description="I developed a Twitter clone backend using Node.js and Express.js, enabling user authentication, authorization, and chat functionality. The frontend, built with templates like EJS, allows users to interact and communicate seamlessly."
              ghLink="https://github.com/jatinnarang22/twitter-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tajmahal}
              isBlog={false}
              title="TajMahal"
              description="During the COVID-19 pandemic, I developed a website dedicated to the Taj Mahal, offering ticket bookings and the sale of its iconic merchandise."
              ghLink="https://github.com/jatinnarang22/TajMahal"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
