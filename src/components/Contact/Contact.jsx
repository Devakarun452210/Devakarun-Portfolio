import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="bottom">
        <a href="https://www.behance.net/devakarunr" target=" ">
          <i className="fa fa-behance"></i>
        </a>
        <a href="https://www.linkedin.com/in/deva-karun-r-115900261" target=" ">
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
  );
};

export default Contact;
