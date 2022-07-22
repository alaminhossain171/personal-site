import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import Styles from "../styles/Timeline.module.css";
import ContentTitle from "./ContentTitle";
import Education from "./Education";
import WorkExp from "./WorkExp";
function Timeline() {
  const [data, setData] = useState("work");
  console.log(Styles);
  return (
    <>
      <ContentTitle title={"Timeline"} />
      <div className="my-4">
        <div className="card CardBg">
          <div className="row my-2">
            <div className="col-sm-12 col-md-3">
              <div className={`w-100 position-relative h-100`}>
                <div className="timeline-header">
                  <div className="w-75 mx-auto ">
                    <div
                      onClick={() => setData("work")}
                      className="btn btn-secondary btn-sm w-100 btn-res "
                    >
                      <span
                        className="
                      mx-2"
                      >
                        <MdWorkOutline size={20} color="white" />
                      </span>{" "}
                      Work Experience
                    </div>
                  </div>
                  <div className="w-75 mx-auto ">
                    <div
                      onClick={() => setData("education")}
                      className="btn btn-secondary btn-sm w-100 btn-res mt-lg-3 mt-md-3"
                    >
                      <span
                        className="
                      mx-2"
                      >
                        <FaUserGraduate size={20} color="white" />
                      </span>{" "}
                      Education
                    </div>
                  </div>
                </div>
                <div className={`${Styles.timeLineActivity} display-sm`}>
                  <div
                    className="display-sm"
                    style={{
                      background: "#0DCAF0",
                      height: "30px",
                      marginTop: `${data === "work" ? "0vw" : "4vw"}`,
                    }}
                  ></div>
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
