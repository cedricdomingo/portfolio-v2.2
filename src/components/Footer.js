import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/footer-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} lg={4} className="text-lg-left text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/allencedricdomingo/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/cedricdomingo" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
            </div>
          </Col>
          <Col xs={12} lg={4} className="text-center">
            <p className="disclaimer">Designed and coded in Visual Studio Code by <b>Allen Cedric Domingo</b>. Built with <b>React Bootstrap</b>, deployed using <b>Vercel.</b></p>
          </Col>
          <Col xs={12} lg={4} className="text-lg-right text-center">
            <img src={logo} alt="Logo" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};