import React from "react";
import { FastCounter } from "react-smooth-counter";
import Styles from "../styles/DevStatus.module.css";
export default function Status({ icon, count, name, lastChild }) {
  return (
    <div className="col-sm-12 col-md-3 col-lg-3 my-2">
      <div
        className={` d-flex justify-content-center status-border ${
          lastChild ? null : Styles.statusContainer
        }`}
      >
        <div>
          <div className="d-flex justify-content-center">{icon}</div>
          <div className="d-flex justify-content-center my-2">
            <h5 className="m-0 p-0">
              <FastCounter
                delay={500}
                startNumber={0}
                to={count}
                // style={{color: 'grey', fontSize: 50, fontWeight: 'bold', width: '100%'}}
                className={"randomClass"}
              />
              +
            </h5>
          </div>
          <div className="d-flex justify-content-center">
            <h6 className="m-0 p-0"> {name}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
