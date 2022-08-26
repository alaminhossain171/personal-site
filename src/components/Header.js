import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Styles from "../styles/Header.module.css";
import { useTheme } from "./../context/ThemeContext";
import Offcanvas from "react-bootstrap/Offcanvas";
function Header() {
 
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClose = () => setMenuOpen(false);
  return (
    <div className="sticky-top">
      <Navbar
        className={isDarkMode ? Styles.HeaderLight : Styles.HeaderDark}
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" onClick={() => {
                   
                    toggleMenu();
                  }}>
            <div className="wrapper d-flex  align-items-center">
              <div className="circle">
                <span id="text">A</span>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-lg`}
            onClick={toggleMenu}
            style={{ border: 0, boxShadow: "none" }}
          >
            <CgMenuRound color="gray" size={27} />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            restoreFocus={false}
            show={menuOpen}
            onHide={handleClose}
            style={{ border: "none" }}
            className={isDarkMode ? Styles.HeaderLight : Styles.HeaderDark}
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header
              className={isDarkMode ? Styles.HeaderLight : Styles.HeaderDark}
            >
              <Offcanvas.Title
                className="text-danger"
                id={`offcanvasNavbarLabel-expand-lg`}
              >
                <CgCloseO
                  color="gray"
                  size={28}
                  onClick={toggleMenu}
                  style={{ cursor: "pointer" }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body
              className={isDarkMode ? Styles.HeadLightBg : Styles.HeadDarkBg}
            >
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link

activeClassName={isDarkMode
 ? Styles.activeHeaderLight
 : Styles.activeHeaderDark}

 
 onClick={() => {
   
   toggleMenu();
 }}
 exact
 as={NavLink}
 to="/"
 className={
 
     `mx-sm-0 mx-md-2 d-flex justify-content-center align-items-center ${
         isDarkMode ? "lightColor" : "darkColor"
       }`
 }
>
 <small> It's Al Amin</small>
</Nav.Link>

                <Nav.Link

                 activeClassName={isDarkMode
                  ? Styles.activeHeaderLight
                  : Styles.activeHeaderDark}

                  
                  onClick={() => {
                    
                    toggleMenu();
                  }}
                  as={NavLink}
                  to="/projects"
                  className={
                  
                      `mx-sm-0 mx-md-2 d-flex justify-content-center align-items-center ${
                          isDarkMode ? "lightColor" : "darkColor"
                        }`
                  }
                >
                  <small> Projects</small>
                </Nav.Link>
                <Nav.Link
                 activeClassName={isDarkMode
                  ? Styles.activeHeaderLight
                  : Styles.activeHeaderDark}
                  onClick={() => {
                   
                    toggleMenu();
                  }}
                  as={NavLink}
                  to="/contact"
                  className={
                 `mx-sm-0 mx-md-2 d-flex justify-content-center align-items-center  ${
                          isDarkMode ? "lightColor" : "darkColor"
                        }`
                  }
                >
                  <small>Contact</small>
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    toggleMenu();
                  }}
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
