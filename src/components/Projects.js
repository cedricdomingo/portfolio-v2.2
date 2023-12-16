import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import projImg1 from "../assets/img/SeedBank-project-img.png";
import projImg2 from "../assets/img/MACE-project-img.png";
import projImg3 from "../assets/img/portfoliov1-img.png";


export const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "SeedBank",
      subtitle: "Personal Gardening Help System",
      description: "Java desktop application that acts as an inventory management system for seeds. Built using JavaFX, and SceneBuilder. The program connects to a MySQL database (hosted using XAMPP) to save and retrieve data. The SeedBank Personal Gardening Help System helps users manage their seed inventory, and automate their planting and harvest schedules. The system includes a functional graphical user interface (GUI), user authentication, and various features to help users manage their gardening activities.",

      imgUrl: projImg1,
      category: ["all", "desktop"],
      tag: ["Java", "JavaFX", "SceneBuilder", "MySQL"],
      githubLink: "https://github.com/cedricdomingo/SeedBank-Personal-Gardening-Help-System"
    },
    {
      title: "MACE",
      subtitle: "Simple Search Engine",
      description: "A simple search engine built using Python 3.11 that utilizes Natural Language Toolkit (NLTK) libraries for natural language processing. Implements TF-IDF weighting, page ranking, cosine vector similarity, tokenization and stemming. ",
      imgUrl: projImg2,
      category: ["all", "desktop"],
      tag: ["Python", "NLTK"],
      githubLink: "https://github.com/cedricdomingo/MACE-Simple-Search-Engine"
    },
    {
      title: "cedricdomingo.github.io",
      subtitle: "Personal Portfolio Website (v1.0)",
      description: "The first version of my Web portfolio built using HTML/CSS, JavaScript and Bootstrap.",
      imgUrl: projImg3,
      category: ["all", "web"],
      tag: ["HTML/CSS", "JavaScript", "Bootstrap"],
      githubLink: "https://github.com/cedricdomingo/GitHub-Portfolio-v1.0"
    },
  ];

  const filterProjects = (category) => {
    setActiveTab(category);
  };

  const filteredProjects =
    activeTab === "all"
      ? projects.reverse()
      : projects.filter((project) => project.category.includes(activeTab)).reverse();

  return (

    <section className="project" id="projects">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Container>
        <h1>PROJECTS</h1>
        <h2>Explore My Work</h2>

        <Tab.Container
          id="projects-tabs"
          activeKey={activeTab}
          onSelect={(key) => filterProjects(key)}
        >
          <Nav
            variant="pills"
            className="nav-pills mb-5 justify-content-center align-items-center"
            id="pills-tab"
          >
            <Nav.Item>
              <Nav.Link eventKey="all">All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="web">Web</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="desktop">Desktop</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content id="slideInUp">
            <Tab.Pane eventKey="all">
              <Row>
                {filteredProjects.map((project, index) => (
                  <React.Fragment key={index}>
                    <Col size={12} sm={6} md={6} style={{ border: '1px solid rgba()', padding: 0, margin: 0 }}>
                      <div className="proj-imgbx" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%' }}>
                        <img src={project.imgUrl} alt={project.title} className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    </Col>
                    <Col size={12} sm={6} md={6} style={{ backgroundColor: 'rgba(18, 18, 18, 0.9)' }}>
                      <div className="proj-txtx">
                        <div className="tags-container">
                          {project.tag.map((tag, idx) => (
                            <div className="tag" key={idx}>{tag}</div>
                          ))}
                        </div>
                        <h3>{project.title}</h3>
                        <h4>{project.subtitle}</h4>
                        <span>{project.description}</span>
                        <button
                          onClick={() => window.open(project.githubLink, '_blank')} // Use window.open to open link in a new tab
                          className="btn github-link" // Add 'btn' class for button styling
                          type="button"
                        >
                          View on GitHub<ArrowRightCircle size={25} />
                        </button>
                      </div>
                    </Col>
                    <Row>
                      <br></br>
                    </Row>
                  </React.Fragment>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="web">
              <Row>
                {filteredProjects
                  .filter((project) => project.category.includes("web"))
                  .map((project, index) => (
                    <React.Fragment key={index}>
                      <Col size={12} sm={6} md={6} style={{ border: '1px solid rgba()', padding: 0, margin: 0 }}>
                        <div className="proj-imgbx" style={{ backgroundColor: 'rgba(255, 0, 0, 0.2)', width: '100%', height: '100%' }}>
                          <img src={project.imgUrl} alt={project.title} className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </Col>
                      <Col size={12} sm={6} md={6} style={{ backgroundColor: 'rgba(18, 18, 18, 0.9)' }}>                        <div className="proj-txtx">
                        <div className="tags-container">
                          {project.tag.map((tag, idx) => (
                            <div className="tag" key={idx}>{tag}</div>
                          ))}
                        </div>
                        <h3>{project.title}</h3>
                        <h4>{project.subtitle}</h4>
                        <span>{project.description}</span>
                        <button
                          onClick={() => window.open(project.githubLink, '_blank')} // Use window.open to open link in a new tab
                          className="btn github-link" // Add 'btn' class for button styling
                          type="button"
                        >
                          View on GitHub<ArrowRightCircle size={25} />
                        </button>
                      </div>
                      </Col>
                      <Row>
                        <br></br>
                      </Row>
                    </React.Fragment>
                  ))}
              </Row>

            </Tab.Pane>
            <Tab.Pane eventKey="desktop">
              <Row>
                {filteredProjects
                  .filter((project) => project.category.includes("desktop"))
                  .map((project, index) => (
                    <React.Fragment key={index}>
                      {/* Project image */}
                      <Col size={12} sm={6} md={6} style={{ border: '1px solid rgba()', padding: 0, margin: 0 }}>
                        <div className="proj-imgbx" style={{ backgroundColor: 'rgba(255, 0, 0, 0.2)', width: '100%', height: '100%' }}>
                          <img src={project.imgUrl} alt={project.title} className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </Col>
                      <Col size={12} sm={6} md={6} style={{ backgroundColor: 'rgba(18, 18, 18, 0.9)' }}>                        <div className="proj-txtx">
                        <div className="tags-container">
                          {project.tag.map((tag, idx) => (
                            <div className="tag" key={idx}>{tag}</div>
                          ))}
                        </div>
                        <h3>{project.title}</h3>
                        <h4>{project.subtitle}</h4>
                        <span>{project.description}</span>
                        <button
                          onClick={() => window.open(project.githubLink, '_blank')} // Use window.open to open link in a new tab
                          className="btn github-link" // Add 'btn' class for button styling
                          type="button"
                        >
                          View on GitHub<ArrowRightCircle size={25} />
                        </button>
                      </div>
                      </Col>
                      <Row>
                        <br></br>
                      </Row>
                    </React.Fragment>
                  ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>


      </Container>

    </section>
  );
};