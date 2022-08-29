import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import Styles from "../styles/Timeline.module.css";
import ContentTitle from "./ContentTitle";
import Education from "./Education";
import WorkExp from "./WorkExp";
function Timeline() {
  const [data, setData] = useState("work");
  const { isDarkMode,  } = useTheme();

  return (
    <>
      <ContentTitle title={"Timeline"} />
      <div className="my-4">
        <div className={`card ${isDarkMode?'LightCard':'DarkCard'}`}>
          <div className="row my-4">
            <div className="col-sm-12 col-md-3">
              <div className={`w-100 position-relative h-100`}>
                <div className="timeline-header">
                  <div className="w-75 mx-auto ">
                    <div
                      style={{ backgroundColor: `${isDarkMode?'#F0F7FF':"#0F172A"}`,border:'none' }}
                      onClick={() => setData("work")}
                      className={
                        data === "work"
                          ? `btn btn-secondary btn-sm w-100 text-info btn-res`
                          : `btn btn-secondary btn-sm w-100 ${isDarkMode?'text-dark':'text-light'} btn-res`
                      }
                    >
                      <span
                        className="
                      mx-2"
                      >
                        <MdWorkOutline
                          size={20}
                          color={data === "work" ? `#33b5e5` : `${isDarkMode?'text-dark':'text-light'}`}
                        />
                      </span>{" "}
                      Work Experience
                    </div>
                  </div>
                  <div className="w-75 mx-auto ">
                    <div
                     style={{ backgroundColor: `${isDarkMode?'#F0F7FF':"#0F172A"}`,border:'none' }}
                      onClick={() => setData("education")}
                      className={
                        data === "education"
                          ? `btn btn-secondary btn-sm w-100 text-info btn-res mt-lg-3 mt-md-3`
                          : `btn btn-secondary btn-sm w-100 ${isDarkMode?'text-dark':'text-light'} btn-res mt-lg-3 mt-md-3`
                      }
                    >
                      <span
                        className="
                      mx-2"
                      >
                        <FaUserGraduate
                          size={20}
                          color={data === "education" ? `#33b5e5` : `${isDarkMode?'text-dark':'text-light'}`}
                        />
                      </span>{" "}
                      Education
                    </div>
                  </div>
                </div>
                <div className={`${Styles.timeLineActivity} display-sm`}>
                 
                </div>
              </div>
            </div>
            <div className="col-md-9">
              {data === "work" && <WorkExp />}
              {data === "education" && <Education />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
