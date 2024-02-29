import React from "react";
import "./About.scss";
import profile from "../../img/profile2.png";

const About = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>About Me</h1>
      <div className="about">
        <div className="details">
          <p>
            "Highly motivated and detail-oriented full-stack developer
            specializing in the MERN stack.Passionate about creating efficient
            and user-friendly web applications. Dedicated to continuous learning
            and keeping up-to-date with emerging technologies. A collaborative
            team player with strong problem-solving skills and a drive for
            delivering high-quality code."
          </p>
        </div>
        <div className="profile">
          <img src={profile} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
