import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
