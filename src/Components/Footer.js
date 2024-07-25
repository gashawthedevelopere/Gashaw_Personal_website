
// import {Link} from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import logo from "../assets/img/mal-log2.png";
import { Col,Row,Container } from "react-bootstrap";
import "./footer.css";
export const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="align-items-center footer-icons">
        {/* Centered columns for smaller screens */}
        <Col xs={12} md={4} className="text-center mb-1 mb-md-0">
          <div className="hen">
            <div className="logo">
            {/* <h1 className="mal-footer">gashaw</h1> */}
            </div>
            <div className="social-icons">
              <a href="https://github.com/gashawthedevelopre" className="icon-link">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/gashaw-sisay/" className="icon-link">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </Col>

        {/* Right-aligned column */}
        <Col xs={12} md={8} className="text-center text-md-end">
          <p>&copy; 2022 Gashaw. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};







