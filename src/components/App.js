import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
  const { isDarkMode } = useTheme();
  return (
    <Router>
      <div className={isDarkMode ? "lightMode" : "darkMode"}>
        <Header />

        <Layout>
          <Switch>
            <Route path={"/"} exact>
              <Home title="Home | Page" />
            </Route>

            <Route path={"/projects"} exact>
              <Projects title="Projects | Page" />
            </Route>

            <Route path={"/contact"} exact>
              <Contact title="Contact | Page" />
            </Route>
          </Switch>
        </Layout>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
