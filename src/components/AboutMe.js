import 'animate.css';
import React, { useState } from 'react';
import milestoneIcon from "../assets/img/milestone-icon.png";

export const AboutMe = () => {

  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);

    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
  };

  return (
    <div className="about-me" id="about-me">
      <div className="container">
        <h1>ABOUT ME</h1>
        <h2>Summary</h2>

        <div className="additional-content">

        </div>
        <h4>I am a <b>software engineer</b> and <b>front-end developer</b> driven by the art of crafting <b>visually compelling</b> and <b>seamlessly responsive</b> web applications. I enjoy solving complex problems and providing effective solutions.
          <br></br><br></br>
          Nothing motivates me more than building something <b>extraordinary</b> from the ground up.</h4>
        <p>
          {expanded && (
            <>
              <div className={`hidden-content ${expanded ? 'expanded' : ''}`}>

                <p><hr />

                  <div className="icon-text">
                    <img src={milestoneIcon} alt="Milestone Icon" className="milestone-icon" />
                    <p style={{ display: 'inline-block' }}>
                      <b>September 2023</b>: Graduated with distinction from <b>Kwantlen Polytechnic University</b> with a <b>Bachelor of Technology</b> in <b>Information Technology</b>, and a degree specialization in <b>Web and Mobile Application Development.</b> (GPA: 3.7).
                    </p>
                  </div>
                  As a recent Bachelor of Technology graduate with a degree specialization in Web and Mobile Application Development, I've cultivated a robust skill set in designing and developing responsive web applications. Proficient in ReactJS, JavaScript, and HTML/CSS, coupled with an eye for detail and experience with a number of other programming languages, I bring a solid foundation in front-end technologies. My interest in Data Science has also led me to explore using Python and its various libraries for data analysis, along with Tableau for visual data representation. I'm enthusiastic about leveraging these skills to create impactful digital solutions and contribute effectively to innovative projects.
                </p>

                <p>Currently, I am learning more about:
                  <ul>
                    <li><b>Front-end Technologies</b>: ReactJS, JavaScript</li>
                    <li><b>Back-end Technologies</b>: Node.js, Java, Python</li>
                    <li><b>Data Science</b>: Tableau, Python (NumPy, Pandas, Matplotlib, Seaborn, Scikit Learn)</li>
                  </ul>
                </p>

              </div>
            </>
          )}
        </p>
        <br></br>
        <button className="learn-more" onClick={toggleText}>
          {expanded ? 'View Less' : 'Learn More'}
        </button>
      </div>
    </div>

  );
};
