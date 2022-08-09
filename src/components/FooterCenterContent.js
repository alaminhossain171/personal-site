import React from "react";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";
export default function FooterCenterContent() {
  const { isDarkMode } = useTheme();
  return (
    <>
      {" "}
      <div className="">
        <h6>My Contacts</h6>
        <ul className="m-0 p-0">
          <li
            style={{ fontSize: 13 }}
            className={`list-unstyled text-primary icon-hover ${
              !isDarkMode ? "text-light" : "text-dark"
            }`}
          >
            <BsFillTelephoneFill className="mx-1" />
            +8801822421743
          </li>
          <li
            style={{ fontSize: 13 }}
            className={`list-unstyled text-primary mt-1 icon-hover ${
              !isDarkMode ? "text-light" : "text-dark"
            }`}
          >
            <AiFillMail className="mx-1" />
            alamin.cse.171@gmail.com
          </li>
        </ul>
      </div>
    </>
  );
}
