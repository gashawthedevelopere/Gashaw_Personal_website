import { Col, NavLink } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export const ProjectCard = ({ title, description, imgUrl, githubUrl,siteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>
            <div className="btn">
             
              <div className="btn__one">
                <NavLink href={githubUrl} target="_blank">
                  <button className="button" type="">
                    VIEW CODE ON GITHUB
                  </button>
                </NavLink>
              </div>

              <div className="btn__two">
                <NavLink href={siteUrl} target="_blank">
                  <button className="button" type="">
                    VISIT SITE
                  </button>
                </NavLink>
              </div>
            </div>
          </span>
        </div>
      </div>
    </Col>
  );
};


