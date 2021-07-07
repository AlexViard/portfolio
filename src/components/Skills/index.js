import React from 'react';
import {
  SiRedux,
  SiPostgresql,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodeDotJs,
  SiReact,
} from 'react-icons/si';
import './style.scss';

const Skills = () => (
  <div className="skills">
    <div className="skills-content">
      <h1 className="skills-title">Mes competences</h1>
      <div className="skills-containers">
        <div className="skills-left"></div>
        <div className="skills-right">

          <div className="skills-right-bar">
            <div className="skills-right-info">
              <SiHtml5 className="skills-right-icon skills-html" />
              <span className="skills-right-text">HTML</span>
            </div>
            <div className="skills-right-progress-line"><span data-content="85%" style={{width: "85%"}}></span></div>
          </div>

          <div className="skills-right-bar">
            <div className="skills-right-info">
              <SiCss3 className="skills-right-icon skills-css" />
              <span className="skills-right-text">CSS</span>
            </div>
            <div className="skills-right-progress-line"><span data-content="70%" style={{width: "70%"}}></span></div>
          </div>

          <div className="skills-right-bar">
            <div className="skills-right-info">
              <SiJavascript className="skills-right-icon skills-js" />
              <span className="skills-right-text">JavaScript</span>
            </div>
            <div className="skills-right-progress-line"><span data-content="80%" style={{width: "80%"}}></span></div>
          </div>

          <div className="skills-right-bar">
            <div className="skills-right-info">
              <SiReact className="skills-right-icon skills-react" />
              <span className="skills-right-text">React.js</span>
            </div>
            <div className="skills-right-progress-line"><span data-content="85%" style={{width: "85%"}}></span></div>
          </div>

          <div className="skills-right-bar">
            <div className="skills-right-info">
              <SiRedux className="skills-right-icon skills-redux" />
              <span className="skills-right-text">Redux</span>
            </div>
            <div className="skills-right-progress-line"><span data-content="75%" style={{width: "75%"}}></span></div>
          </div>

          <div className="skills-right-bar">
            <div className="skills-right-info">
              <SiNodeDotJs className="skills-right-icon skills-node" />
              <span className="skills-right-text">Node.js</span>
            </div>
            <div className="skills-right-progress-line"><span data-content="80%" style={{width: "80%"}}></span></div>
          </div>

          <div className="skills-right-bar">
            <div className="skills-right-info">
              <SiPostgresql className="skills-right-icon skills-postgresql" />
              <span className="skills-right-text">PostgreSQL</span>
            </div>
            <div className="skills-right-progress-line"><span data-content="70%" style={{width: "70%"}}></span></div>
          </div>



        </div>
      </div>
    </div>
  </div>
);

Skills.propTypes = {

};

Skills.defaultProps = {

};

export default Skills;
