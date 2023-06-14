import React from "react";
import ContactMe from "../../components/ContactMe";
import "../../assets/styles/pages.css";

//Contact page with links to my LinkedIn, Github, Twitter and emails
function Contact() {
  return (
    <div className="pageBackground">
      <h1 className="pageTitle">Contact Me</h1>
      <p className="contactText">
        If you want to get in contact please use the form below
        <br />
        or click on one of the links
        <br />
        or email me direct: alanabarrettfrew@gmail.com
      </p>
      <span className="buttonGroup">
        <a href="https://twitter.com/AlanaBF81" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/AlanaBF" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alanabarrettfrew"
          aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </span>
      
      <div className="contactMeForm">
        <ContactMe />
      </div>
    </div>
  );
}

export default Contact;
