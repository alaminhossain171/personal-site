import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Styles from "../styles/Header.module.css";
function Header() {
  return (
    <>
      <Navbar className={Styles.header} expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h1>A</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
