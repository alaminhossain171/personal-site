import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Styles from "../styles/Header.module.css";
import { useTheme } from "./../context/ThemeContext";
function Header() {
  const [active, setActive] = useState("Home");
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <>
      <Navbar
        className={isDarkMode ? Styles.HeaderLight : Styles.HeaderDark}
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <h1 style={isDarkMode ? { color: "black" } : { color: "white" }}>
              A
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ boxShadow: "none", border: "none", background: "white" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                onClick={() => setActive("Home")}
                as={NavLink}
                to="/"
                className={
                  active === "Home"
                    ? `mx-sm-0 mx-md-2 ${
                        isDarkMode ? "lightColor" : "darkColor"
                      } ${Styles.activeHeader}`
                    : `mx-sm-0 mx-md-2  ${
                        isDarkMode ? "lightColor" : "darkColor"
                      }`
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => setActive("About")}
                as={NavLink}
                to="/about"
                className={
                  active === "About"
                    ? `mx-sm-0 mx-md-2  ${
                        isDarkMode ? "lightColor" : "darkColor"
                      } ${Styles.activeHeader}`
                    : `mx-sm-0 mx-md-2  ${
                        isDarkMode ? "lightColor" : "darkColor"
                      }`
                }
              >
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => setActive("Projects")}
                as={NavLink}
                to="/projects"
                className={
                  active === "Projects"
                    ? `mx-sm-0 mx-md-2  ${
                        isDarkMode ? "lightColor" : "darkColor"
                      } ${Styles.activeHeader}`
                    : `mx-sm-0 mx-md-2  ${
                        isDarkMode ? "lightColor" : "darkColor"
                      }`
                }
              >
                Projects
              </Nav.Link>
              <Nav.Link
                onClick={() => setActive("Contact")}
                as={NavLink}
                to="/contact"
                className={
                  active === "Contact"
                    ? `mx-sm-0 mx-md-2  ${
                        isDarkMode ? "lightColor" : "darkColor"
                      } ${Styles.activeHeader}`
                    : `mx-sm-0 mx-md-2  ${
                        isDarkMode ? "lightColor" : "darkColor"
                      }`
                }
              >
                Contact
              </Nav.Link>
              <Nav.Link
                style={{ boxShadow: "none" }}
                className={` d-flex justify-content-center align-items-center`}
              >
                <DarkModeSwitch
                  moonColor="gray"
                  sunColor="gold"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={20}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
