import React from "react";
import { MdLink } from "react-icons/md";

export default function HomeProjectCard({ title, details, technology, url }) {
  return (
    <>
      {" "}
      <div className="card CardBg p-2 w-100">
        <div className="card-head d-flex flex-row justify-content-end">
          <a href={url} target="_blank" rel="noreferrer">
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Project link"
            >
              <MdLink size={25} color="" />
            </div>
          </a>
        </div>
        <div className="card-body">
          <h5>{title}</h5>
          <small>{details}</small>
          <div
            className="bg-primary d-flex justify-content-evenly my-2"
            style={{ borderRadius: 10 }}
          >
            {technology?.map((item, index) => {
              return (
                <div key={index}>
                  <small>{item}</small>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
