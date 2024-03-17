import "./Skills.scss";
import html from "../../img/skills/html-5.png";
import css from "../../img/skills/css-3.png";
import js from "../../img/skills/js.png";
import react from "../../img/skills/react.png";
import sass from "../../img/skills/notion.webp";
import figma from "../../img/skills/figma.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skill">
        <div className="logo">
          <img src={figma} alt="" className="js" />
        </div>
        <div className="logo">
          <img src={html} alt="" />
        </div>
        <div className="logo">
          <img src={css} alt="" />
        </div>
        <div className="logo">
          <img src={js} alt="" className="js" />
        </div>
        <div className="logo">
          <img src={react} alt="" className="react" />
        </div>
        <div className="logo">
          <img src={sass} alt="" className="not" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
