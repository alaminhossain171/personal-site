import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function FooterLeftContent() {
  const { isDarkMode } = useTheme();
  return (
    <>
      {" "}
      <div className="">
        <h6>Links</h6>
        <ul>
          <li>
            <Link
              style={{ fontSize: 13 }}
              className={`text-decoration-none icon-hover ${
                !isDarkMode ? "text-light" : "text-dark"
              }`}
              to="/"
            >
              It's Al Amin
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: 13 }}
              className={`text-decoration-none icon-hover ${
                !isDarkMode ? "text-light" : "text-dark"
              }`}
              to="/projects"
            >
              {" "}
              Projects
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: 13 }}
              className={`text-decoration-none icon-hover ${
                !isDarkMode ? "text-light" : "text-dark"
              }`}
              to="/contact"
            >
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
