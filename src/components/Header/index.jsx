import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import favicon from "../../assets/images/businessLogo.jpeg";
import "../../assets/styles/components.css";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navigation navbar-expand-lg  justify-content-md-center justify-content-start"
    >
      <LinkContainer to="/">
        <Navbar.Brand className="navbarBrand">
          <img src={favicon} alt="logo" height="60px" /> nauticalturtle.com
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <i className="fa-solid fa-bars"></i>
      </Navbar.Toggle>

      <Navbar.Collapse className="navbar-collapse collapse justify-content-between align-items-center w-100">
        <Nav className="me-auto navbar-nav mx-auto text-md-center text-left">
          <LinkContainer to="/">
            <Nav.Link className="navLink">Home</Nav.Link>
          </LinkContainer>
          {/* Freelance Work */}
          <LinkContainer to="/freelanceDeveloper">
            <Nav.Link className="navLink">Website Design Services</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/freelanceTutor">
            <Nav.Link className="navLink">Tutor Services</Nav.Link>
          </LinkContainer>
          {/* Blog Page */}
          <LinkContainer to="/Blog">
            <Nav.Link className="navLink">Blog</Nav.Link>
          </LinkContainer>
          {/* Contacts and info */}
          <LinkContainer to="/Contact">
            <Nav.Link className="navLink">Contact Me</Nav.Link>
          </LinkContainer>
        </Nav>

        <Nav className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
          <div className="navIcons">
            <a href="https://twitter.com/AlanaBF81">
              <i className="fa navbarIcons fa-twitter"></i>
            </a>
            <a href="https://github.com/AlanaBF">
              <i className="fa navbarIcons fa-github"></i>
            </a>{" "}
            <a href="https://www.linkedin.com/in/alanabarrettfrew/">
              <i className="fa navbarIcons fa-linkedin"></i>
            </a>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
