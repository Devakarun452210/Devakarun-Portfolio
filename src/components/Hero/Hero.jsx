import "./Hero.scss";
import dp from "../../img/dp.png";
import smile from "../../img/smile.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="profilePic">
        <img src={dp} alt="" />
      </div>
      <div className="profileDetails">
        <div className="top">
          <span className="name">hello I'm Devakarun</span>
          <h1 className="designation">UI / UX Designer | Frontend Developer</h1>
        </div>
        <div className="middle">
          <i className="fa-solid fa-arrow-right hireArrow"></i>
          <p>
            <a
              target="blank"
              href="https://drive.google.com/file/d/1XhrsYD1S2qAvaOn7WGLC8XwlpY_jr5jz/view?usp=sharing"
            >
              Download Resume
            </a>
          </p>
          <img src={smile} alt="" />
        </div>
        <hr />

        <div className="bottom">
          <a href="https://www.behance.net/devakarunr" target=" ">
            <i className="fa fa-behance"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/deva-karun-r-115900261"
            target=" "
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a href=" https://wa.me/6380839448" target=" ">
            <i className="fa fa-whatsapp"></i>
          </a>
          <a href="mailto:devakarun05@gmail.com">
            <i className="fa-solid fa-paper-plane"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
