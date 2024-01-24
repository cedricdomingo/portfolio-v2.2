import { useState, useEffect } from "react";
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import reactIcon from "../assets/img/react-icon.png";
import javascriptIcon from "../assets/img/javascript-icon.png";
import htmlIcon from "../assets/img/html-icon.png";
import cssIcon from "../assets/img/css-icon.png";
import tailwindcssIcon from "../assets/img/tailwindcss-icon.png";
import bootstrapIcon from "../assets/img/bootstrap-icon.png";
import javaIcon from "../assets/img/java-icon.png";
import cplusplusIcon from "../assets/img/cplusplus-icon.png";
import pythonIcon from "../assets/img/python-icon.png";
import sqlIcon from "../assets/img/sql-icon.png";
import gitIcon from "../assets/img/git-icon.png";
import tableauIcon from "../assets/img/tableau-icon.png";
import figmaIcon from "../assets/img/figma-icon.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Front-End Developer", "Data Science Enthusiast"];
  const period = 2000;

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about-me');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const openResumeInNewTab = () => {
    const pdfPath = '/resume/resume.pdf';
    window.open(pdfPath, '_blank');
  };

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period * 1.5);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setDelta(150);
    }
  };

  const iconMarquee = [
    { icon: reactIcon, label: 'React' },
    { icon: javascriptIcon, label: 'JavaScript' },
    { icon: htmlIcon, label: 'HTML' },
    { icon: cssIcon, label: 'CSS' },
    { icon: tailwindcssIcon, label: 'Tailwind CSS' },
    { icon: bootstrapIcon, label: 'Bootstrap' },
    { icon: cplusplusIcon, label: 'C++' },
    { icon: pythonIcon, label: 'Python' },
    { icon: sqlIcon, label: 'SQL' },
    { icon: gitIcon, label: 'Git' },
    { icon: javaIcon, label: 'Java' },
    { icon: tableauIcon, label: 'Tableau' },
    { icon: figmaIcon, label: 'Figma' },
    // Add other icons as needed
  ];

  // Duplicate icons array to ensure continuous looping
  const duplicatedIcons = [...iconMarquee, ...iconMarquee, ...iconMarquee, ...iconMarquee, ...iconMarquee];

  const renderIconMarquee = (icons) => {
    return (
      <div className="marquee-container">
        {/* Label for "Technologies I work with" */}
        <div className="marquee-label">
          <span>My Tech Stack</span>
        </div>

        {/* Icon marquee */}
        <div className="marquee">
          <div className="marquee__inner-wrap">
            <div className="marquee__inner">
              {icons.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className="marquee__img"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  ></div>
                  <span>{item.label}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="banner-name">{`Allen Cedric Domingo`}</div>
                <h2><span className="txt-rotate"><span className="wrap">{text}</span></span></h2>
                <p></p>
                <div className="button-group">
                  <button onClick={openResumeInNewTab}>View Resume</button>
                  <button onClick={scrollToAboutMe}>Learn More <ArrowRightCircle size={25} /></button>
                </div>
              </div>}
          </TrackVisibility>
        </Row>
      </Container>

      <div className="marquee-container">
        {renderIconMarquee(duplicatedIcons)}
      </div>
    </section>
  )
}