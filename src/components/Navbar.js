import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { MdDeveloperMode, MdOutlineCastForEducation, MdWorkOutline } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  // Close navbar when route changes
  useEffect(() => {
    updateExpanded(false);
    if (location.pathname && location.pathname !== "") {
      setActiveLink(location.pathname);
    }
  }, [location]);

  const getBaseURL = () => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const base = pathSegments.length > 0 ? `/${pathSegments[0]}` : '';
    return base;
  };


  const handleNavClick = (path) => {
    setActiveLink(path);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Navbar.Brand href={`${getBaseURL()}/`}>
        <MdDeveloperMode style={{ marginBottom: "2px" }} /> Kunj Champaneri
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link 
              as={Link} 
              to="/" 
              onClick={() => handleNavClick("/")}
              className={activeLink === "/" ? "nav-link-active" : ""}
            >
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => handleNavClick("/about")}
              className={activeLink === "/about" ? "nav-link-active" : ""}
            >
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/education"
              onClick={() => handleNavClick("/education")}
              className={activeLink === "/education" ? "nav-link-active" : ""}
            >
              <MdOutlineCastForEducation style={{ marginBottom: "2px" }} /> Education
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/experience"
              onClick={() => handleNavClick("/experience")}
              className={activeLink === "/experience" ? "nav-link-active" : ""}
            >
              <MdWorkOutline style={{ marginBottom: "2px" }} /> Experiences
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => handleNavClick("/project")}
              className={activeLink === "/project" ? "nav-link-active" : ""}
            >
              <AiOutlineFundProjectionScreen
                style={{ marginBottom: "2px" }}
              />{" "}
              Projects
            </Nav.Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
