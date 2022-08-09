import React from "react";
import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedin,
  FaStackOverflow,
  FaTwitterSquare,
} from "react-icons/fa";
function FollowingIcons() {
  return (
    <>
      <div className="w-100   mt-4 ">
        <ul className="m-0 p-0 d-flex justify-content-between ">
          <li className="list-unstyled mx-1">
            <a
              className="text-decoration-none"
              href="https://github.com/alaminhossain171"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "#1D293A",
                  borderRadius: 10,
                }}
              >
                <FaGithubAlt size={20} color="white" className="icon-hover" />
              </div>
            </a>
          </li>
          <li className="list-unstyled mx-1">
            <a
              className="text-decoration-none"
              href="https://www.linkedin.com/in/mdalamincse/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "#1D293A",
                  borderRadius: 10,
                }}
              >
                <FaLinkedin size={20} color="white" className="icon-hover" />
              </div>
            </a>
          </li>
          <li className="list-unstyled mx-1">
            <a
              className="text-decoration-none"
              href="https://twitter.com/171alamincse"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "#1D293A",
                  borderRadius: 10,
                }}
              >
                <FaTwitterSquare
                  size={20}
                  color="white"
                  className="icon-hover"
                />
              </div>
            </a>
          </li>
          <li className="list-unstyled mx-1">
            <a
              className="text-decoration-none"
              href="https://www.facebook.com/alaminhossain.akash.35/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "#1D293A",
                  borderRadius: 10,
                }}
              >
                <FaFacebookF size={20} color="white" className="icon-hover" />
              </div>
            </a>
          </li>
          <li className="list-unstyled mx-1">
            <a
              className="text-decoration-none"
              href="https://stackoverflow.com/users/17221777/md-al-amin"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "#1D293A",
                  borderRadius: 10,
                }}
              >
                <FaStackOverflow
                  size={20}
                  color="white"
                  className="icon-hover"
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FollowingIcons;
