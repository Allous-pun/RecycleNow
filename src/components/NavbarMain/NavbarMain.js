import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "./NavbarMain.module.css";
import { NavLink } from "react-router-dom";
import { FaAngleDown, FaUser, FaSignInAlt, FaRegEye } from "react-icons/fa"; // Import the icons
import logo from './logo.png'; 

const NavbarMain = () => {
  const [activeNav, setActiveNav] = useState([true, false, false, false, false, false]);
  const [expand, setExpand] = useState(false);

  const closeNav = () => {
    setExpand(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") != null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }
  }, []);

  const handleActiveNav = (i) => {
    let temp = activeNav.map(() => false);
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 10px rgb(0 0 0 / 0.4)",
        }}
        variant="light"
        expand="lg"
        sticky="top"
        onToggle={() => {
          setExpand((prevState) => !prevState);
        }}
        expanded={expand}
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            <img src={logo} alt="Mebiut Logo" style={{ width: '140px', height: 'auto', marginRight: '8px' }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${activeNav[0] ? styles.active : ""}`}
                style={{ marginTop: "8px", paddingLeft: '16px' }}
                onClick={() => {
                  handleActiveNav(0);
                  closeNav();
                }}
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className={`${styles.nav_text} nav-link ${activeNav[1] ? styles.active : ""}`}
                style={{ marginTop: "8px", paddingLeft: '16px' }}
                onClick={() => {
                  handleActiveNav(1);
                  closeNav();
                }}
              >
                Services
              </NavLink>
              <NavLink
                to="/pricing"
                className={`${styles.nav_text} nav-link ${activeNav[3] ? styles.active : ""}`}
                style={{ marginTop: "8px", paddingLeft: '16px' }}
                onClick={() => {
                  handleActiveNav(3);
                  closeNav();
                }}
              >
                Pricing
              </NavLink>

              <NavDropdown
                title={
                  <span className={`${styles.nav_text} nav-link`}>
                    More Insights <FaAngleDown />
                  </span>
                }
                id="more-insights-dropdown"
                align="end"
                style={{ marginTop: "8px" }}
              >
                <NavDropdown.Item as={NavLink} to="/contactUs">
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/aboutus">
                  About Us
                </NavDropdown.Item>
              </NavDropdown>

              {/* Login, Sign Up, and Reset Password as a Dropdown */}
              <NavDropdown
                title={
                  <span className={`${styles.nav_text} nav-link`}>
                    <FaUser /> Account <FaAngleDown />
                  </span>
                }
                id="auth-dropdown"
                align="end"
                style={{ marginTop: "8px", marginLeft: "16px" }}
              >
                <NavDropdown.Item as={NavLink} to="/signup">
                  <FaUser /> Sign Up
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/login">
                  <FaSignInAlt /> Log In
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/forgetpassword">
                  <FaRegEye /> Reset Password
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
