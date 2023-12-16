import React from 'react';
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

import frontendIcon from "../assets/img/frontendIcon.png";
import backendIcon from "../assets/img/backendIcon.png";
import datascienceIcon from "../assets/img/datascienceIcon.png";




export const Skills = () => {


  const frontEndIcons = [
    { icon: reactIcon, label: 'React' },
    { icon: javascriptIcon, label: 'JavaScript' },
    { icon: htmlIcon, label: 'HTML' },
    { icon: cssIcon, label: 'CSS' },
    { icon: tailwindcssIcon, label: 'Tailwind CSS' },
    { icon: bootstrapIcon, label: 'Bootstrap' },
  ];

  const backEndIcons = [
    { icon: javaIcon, label: 'Java' },
    { icon: cplusplusIcon, label: 'C++' },
    { icon: sqlIcon, label: 'SQL' },
    { icon: pythonIcon, label: 'Python' },
  ];

  const otherIcons = [
    { icon: pythonIcon, label: 'Python' },
    { icon: tableauIcon, label: 'Tableau' },
    { icon: gitIcon, label: 'Git' },
    { icon: figmaIcon, label: 'Figma' },

    // Add more data science icons if needed
  ];

  const renderIcons = (icons) => (
    <div className="icons-container">
      {icons.map((item, index) => (
        <div className="icon" key={index}>
          <img src={item.icon} alt={`${item.label} Icon`} className="tech-icon" />
          <span className="icon-label">{item.label}</span>
        </div>
      ))}
    </div>



  );

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skills-bx wow zoomIn">
              <h1>SKILLS</h1>
              <h2>My Expertise</h2>
              <h4>My degree specialization in <b>Web and Mobile Application Development</b> coupled with my personal experience working on projects has helped me cultivate a robust skill set in designing and developing responsive web applications. Here's a glimpse some of the technologies and tools I use.</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="tech-box">
                    <img
                      src={frontendIcon}
                      alt="Frontend Icon"
                      style={{ width: '75px', height: '75px' }} // Set width and height to 100px
                    />
                    <h3>Front-End<br></br>Technologies</h3>
                    <div>Experienced in crafting responsive and intuitive user interfaces using a combination of HTML, CSS, and JavaScript frameworks like React, along with a keen interest in UI/UX design methodologies.</div>
                    {renderIcons(frontEndIcons)}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="tech-box">
                    <img
                      src={backendIcon}
                      alt="Backend Icon"
                      style={{ width: '75px', height: '75px' }} // Set width and height to 100px
                    />
                    <h3>Back-End<br></br>Technologies</h3>
                    <div>Proficient in implementing robust server-side solutions using Java, along with expertise in database management through SQL and a foundational understanding of C++, Java, and Python.</div>
                    <div class="section-divider"></div>
                    {renderIcons(backEndIcons)}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="tech-box">
                    <img
                      src={datascienceIcon}
                      alt="Data Science Icon"
                      style={{ width: '75px', height: '75px' }} // Set width and height to 100px
                    />
                    <h3>Data Science<br></br>& Other Tools</h3>
                    <div>Competency using Figma for wireframing and prototyping. Familiarity with using Git for version control. Experience using Python for data analysis, and Tableau for data visualization.</div>
                    <div class="section-divider"></div>
                    {renderIcons(otherIcons)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
