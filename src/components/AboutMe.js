import 'animate.css';
import React, { useState } from 'react';

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
        <h2>About Me</h2>
        <p>
          <p>
            As a recent Bachelor of Technology graduate with a degree specialization in Web and Mobile Application Development, I've cultivated a robust skill set in designing and developing responsive web applications. Proficient in ReactJS, JavaScript, and HTML/CSS, coupled with an eye for detail and experience with a number of other programming languages, I bring a solid foundation in front-end technologies. My interest in Data Science has also led me to explore using Python and its various libraries for data analysis, along with Tableau for visual data representation. I'm enthusiastic about leveraging these skills to create impactful digital solutions and contribute effectively to innovative projects.
          </p>


          <p>Currently, I am learning more about:
            <ul>
              <li><b>Front-end Technologies</b>: ReactJS, JavaScript</li>
              <li><b>Back-end Technologies</b>: Node.js, Java, Python</li>
              <li><b>Data Science</b>: Tableau, Python (NumPy, Pandas, Matplotlib, Seaborn, Scikit Learn)</li>
            </ul>
          </p>

          {expanded && (
            <>
              <div className={`hidden-content ${expanded ? 'expanded' : ''}`}>

                <p>
                  My journey as a software developer began as a bored 10-year-old messing around with Rollercoaster Tycoon and Command & Conquer game files to grant myself unlimited resources (my youthful attempt at "hacking"). In highschool, I learned how to create personal websites and custom Tumblr templates. Over time, learning how to manipulate code to achieve a desired outcome became even more enjoyable than the actual in-game advantage itself.
                </p><p>
                  Fast forward to today, and I am now a recent Bachelor of Technology graduate with a degree specialization in Web and Mobile Application Development. Each day I am learning more about front-end and back-end technologies and continuing to refine my craft, and my passion for innovation and creation burns brighter than ever. While I've left manipulating game files in 'notepad.exe' behind, that same curiosity to better understand and improve things still endures.
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
