import React from "react";
import { useTheme } from "../context/ThemeContext";
import ModalComp from "./ModalComp";

export default function ProjectCard({ name, brief, tech, live, git, img }) {
  const [modalShow, setModalShow] = React.useState(false);
  const {isDarkMode}=useTheme()
  return (
    <>
      {" "}
      <div className="col-sm-12 col-md-6 col-lg-4 my-3">
        <div className={`${isDarkMode?'LightCard shadow':'DarkCard shadow'}`}>
          <div className="card-body">
            <div
              style={{
                height: 150,
                width: "100%",
                cursor: "pointer",
              }}
            >
              <img
                src={img}
                style={{ height: 145, width: "100%" }}
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="mt-2 text-center">
              <p className="m-0 p-0">{name}</p>
              <button
                onClick={() => setModalShow(true)}
                className="btn btn-outline-info my-1 btn-sm text-small text-decoration-none"
              >
                View Now
              </button>
              <ModalComp
                name={name}
                brief={brief}
                tech={tech}
                live={live}
                git={git}
                show={modalShow}
                img={img}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
