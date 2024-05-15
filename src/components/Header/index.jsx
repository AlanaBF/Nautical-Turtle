import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/branding/plainLogo.png";
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
          <img src={logo} alt="logo" height="100px" />
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
             {/* About Me Page
             <LinkContainer to="/AboutMe">
            <Nav.Link className="navLink">About Me</Nav.Link>
          </LinkContainer> */}
          {/* Fun Page */}
          <LinkContainer to="/Fun">
            <Nav.Link className="navLink">Turtly Helpful Page</Nav.Link>
          </LinkContainer>
          {/* Blog Dropdown */}
          <NavDropdown
            className="dropdownNav"
            title="Blog"
            id="basicNavDropdown"
          >
            <LinkContainer to="/BlogPage">
              <Nav.Link className="navLinkDropdown">Blog Page</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Post5">
              <Nav.Link className="navLinkDropdown">
                A Journey Down lots of Rabbit Holes - Unity and React
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Post4">
              <Nav.Link className="navLinkDropdown">
                JavasScript30 Complete! 1st 30 days of 100 Days of Code
                Challenge 2024.
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Post3">
              <Nav.Link className="navLinkDropdown">
                {" "}
                My 1st week as an Associate Consultant with Version 1.
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Post2">
              <Nav.Link className="navLinkDropdown">Journey to Landing my First Job in Tech</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Post1">
              <Nav.Link className="navLinkDropdown">A period of reflection and goal setting</Nav.Link>
            </LinkContainer>
          </NavDropdown>
          {/* Contacts and info */}
          <LinkContainer to="/Contact">
            <Nav.Link className="navLink">Contact Me</Nav.Link>
          </LinkContainer>
        </Nav>

        <Nav className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
          <div className="navIcons">
                   <a
          href="https://www.instagram.com/teacherturnsturtle81/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram navbarIcons" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/AlanaBF"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github navbarIcons" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alanabarrettfrew"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin navbarIcons" aria-hidden="true"></i>
        </a>
        <a
          href="https://medium.com/@alana.barrettfrew"
          aria-label="Medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-medium navbarIcons" aria-hidden="true"></i>
        </a>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
