import React from "react";
import Styles from "../styles/DevStatus.module.css";
import ContentTitle from "./ContentTitle";
export default function DevStatus() {
  return (
    <div className="mt-4">
      <ContentTitle title={"My Dev Stats"} />
      <div className={`card my-3 ${Styles.CardBg}`}>
        <div className="row my-2">
          <div className="col-sm-12 col-md-4 col-lg-3 my-2">
            <div>
              <div className={` d-flex justify-content-center ${Styles.statusContainer}`} >
                <h5>conten-1</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 my-2">
            <div>
              <div className=" d-flex justify-content-center bg-warning">
                <h5>conten-1</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 my-2">
            <div>
              <div className=" d-flex justify-content-center bg-warning">
                <h5>conten-1</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 my-2">
            <div>
              <div className=" d-flex justify-content-center bg-warning">
                <h5>conten-1</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
