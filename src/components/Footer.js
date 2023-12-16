import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/footer-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={6} className="text-lg-left">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="footer-logo" />
              <p className="disclaimer">
                © 2023 Allen Cedric Domingo. All rights reserved.

                <p> Designed and coded in Visual Studio Code by Allen Cedric Domingo.
                  Built with <b>React Bootstrap</b>, deployed using <b>Vercel.</b>
                </p>
              </p>
            </div>
          </Col>

          <Col xs={5} md={3} className="text-lg-right">
            <div className="social-section">
              <h6 className="social-header">SOCIAL</h6>
              <div className="footer-social-icons">
                <div className="footer-social-icon">
                  <a href="https://github.com/cedricdomingo" target="_blank" rel="noopener noreferrer">
                    <img src={navIcon1} alt="LinkedIn" className="icon" />
                    <span className="footer-icon-label">GitHub</span>
                  </a>
                </div>
                <div className="footer-social-icon">
                  <a href="https://www.linkedin.com/in/allencedricdomingo/" target="_blank" rel="noopener noreferrer">
                    <img src={navIcon2} alt="GitHub" className="icon" />
                    <span className="footer-icon-label">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={6} md={3} className="text-lg-left">
            <div className="contact-section">
              <h6 className="contact-header">CONTACT</h6>
              <div className="contact-info">
                <p>allencedricdomingo@gmail.com</p>
                <p>Vancouver, British Columbia</p>

              </div>
            </div>
          </Col>


        </Row>
      </Container>
    </footer>
  );
};
