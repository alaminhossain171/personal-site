import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CgCloseO, CgMenuRound } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Styles from "../styles/Header.module.css";
import { useTheme } from "./../context/ThemeContext";
function Header() {
  const [active, setActive] = useState("Home");
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [menu, setMenu] = useState(false);

  return (
    <div className="sticky-top">
      <Navbar
        className={isDarkMode ? Styles.HeaderLight : Styles.HeaderDark}
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <div class="wrapper d-flex  align-items-center">
              <div class="circle">
                <span id="text">A</span>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setMenu(!menu)}
            aria-controls="basic-navbar-nav"
            style={{ border: 0, boxShadow: "none" }}
          >
            {!menu ? (
              <CgMenuRound color="gray" size={27} />
            ) : (
              <CgCloseO color="gray" size={26} />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                onClick={() => setActive("Home")}
                as={NavLink}
                to="/"
                className={
                  active === "Home"
                    ? `mx-sm-0 mx-md-2 fw-bold d-flex justify-content-center align-items-center ${
                        isDarkMode ? "lightColor " : "darkColor"
                      } ${
                        isDarkMode
                          ? Styles.activeHeaderLight
                          : Styles.activeHeaderDark
                      }`
                    : `mx-sm-0 mx-md-2 d-flex justify-content-center align-items-center  ${
                        isDarkMode ? "lightColor" : "darkColor"
                      }`
                }
              >
                <small>It's Al Amin</small>
              </Nav.Link>

              <Nav.Link
                onClick={() => setActive("Projects")}
                as={NavLink}
                to="/projects"
                className={
                  active === "Projects"
                    ? `mx-sm-0 mx-md-2  fw-bold d-flex justify-content-center align-items-center ${
                        isDarkMode ? "lightColor" : "darkColor"
                      } ${
                        isDarkMode
                          ? Styles.activeHeaderLight
                          : Styles.activeHeaderDark
                      }`
                    : `mx-sm-0 mx-md-2 d-flex justify-content-center align-items-center ${
                        isDarkMode ? "lightColor" : "darkColor"
                      }`
                }
              >
                <small> Projects</small>
              </Nav.Link>
              <Nav.Link
                onClick={() => setActive("Contact")}
                as={NavLink}
                to="/contact"
                className={
                  active === "Contact"
                    ? `mx-sm-0 mx-md-2 fw-bold d-flex justify-content-center align-items-center ${
                        isDarkMode ? "lightColor" : "darkColor"
                      } ${
                        isDarkMode
                          ? Styles.activeHeaderLight
                          : Styles.activeHeaderDark
                      }`
                    : `mx-sm-0 mx-md-2 d-flex justify-content-center align-items-center  ${
                        isDarkMode ? "lightColor" : "darkColor"
                      }`
                }
              >
                <small>Contact</small>
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
    </div>
  );
}

export default Header;
