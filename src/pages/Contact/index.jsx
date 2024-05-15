import React from "react";
import ContactMe from "../../components/ContactMe";
import "../../assets/styles/pages.css";
import logo from "../../assets/branding/Nautical Turtle Logo.png";
//Contact page with links to my LinkedIn, Github, Twitter and emails
function Contact() {
  return (
    <div className="pageBackground">
    <br/>
      <img src={logo} width="100px"></img>
      <h1 className="pageTitle">Contact Me</h1>

      <p className="contactText">
        If you want to get in contact please use the social media icons below or
        email alanabarrett-frew@hotmail.com
        <br />
      </p>
      <h1>Follow Me</h1>
      <span className="buttonGroup">
        <a
          href="https://www.instagram.com/teacherturnsturtle81/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/AlanaBF"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alanabarrettfrew"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          href="https://medium.com/@alana.barrettfrew"
          aria-label="Medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-medium" aria-hidden="true"></i>
        </a>
      </span>

      <h1>Check out my portfolio site</h1>
      <a
        href="https://www.alanabarrettfrew.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={{backgroundColor:"var(--teal)", color: "var(--dark-blue)", padding:"10px", borderRadius:"20px", border:"solid 5px var(--dark-blue)", margin: "1%"}}><h2>Portfolio Website</h2></button>
      </a>
      <div className="contactMeForm">
        <ContactMe />
      </div>
    </div>
  );
}

export default Contact;
