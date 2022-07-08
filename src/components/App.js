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
              <Home />
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
