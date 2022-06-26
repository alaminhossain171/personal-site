import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Styles from "../styles/Header.module.css";
function Header() {
  const [active, setActive] = useState("Home");
  return (
    <>
      <Navbar className={Styles.header} expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <h1>A</h1>
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
                    ? `mx-sm-0 mx-md-2 text-light ${Styles.activeHeader}`
                    : `mx-sm-0 mx-md-2 text-light`
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
                    ? `mx-sm-0 mx-md-2 text-light ${Styles.activeHeader}`
                    : `mx-sm-0 mx-md-2 text-light`
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
                    ? `mx-sm-0 mx-md-2 text-light ${Styles.activeHeader}`
                    : `mx-sm-0 mx-md-2 text-light`
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
                    ? `mx-sm-0 mx-md-2 text-light ${Styles.activeHeader}`
                    : `mx-sm-0 mx-md-2 text-light`
                }
              >
                Contact
              </Nav.Link>
              <Nav.Link
                style={{ boxShadow: "none" }}
                className={`btn btn-info secondary mx-sm-0 mx-md-2 text-dark `}
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;