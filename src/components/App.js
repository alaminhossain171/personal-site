import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import "../styles/Responsive.css";
import "../styles/styles.css";

import { useTheme } from "./../context/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";

function App() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <Router>
      <div className={isDarkMode ? "lightMode" : "darkMode"}>
        <Header />

        <Layout>
          <Switch>
            <Route path={"/"} exact>
              <Home />
            </Route>

            <Route path={"/about"} exact>
              <About />
            </Route>

            <Route path={"/projects"} exact>
              <Projects />
            </Route>

            <Route path={"/contact"} exact>
              <Contact />
            </Route>
          </Switch>
        </Layout>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
