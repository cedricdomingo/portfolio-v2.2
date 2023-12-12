// Currently unused section. Previously used for Projects
// section to be displayed on image hover. Currently not
// used, but keeping file in repo for possible future usage.

import { Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, subtitle, description, imgUrl, githubLink }) => {
  const openGitHubLink = () => {
    window.open(githubLink, '_blank');
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-container">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="proj-details">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <span>{description}</span>
          <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
            <button className="github-button" onClick={openGitHubLink}>
              View on GitHub <ArrowRightCircle size={25} />
            </button>
          </a>
        </div>
      </div>
    </Col>
  );
};
