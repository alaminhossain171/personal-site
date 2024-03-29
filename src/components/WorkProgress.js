import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
function WorkProgress({ title }) {
  return (
    <>
      <p className="my-1 work-details left-content-font">
        <span>
          <IoIosArrowDroprightCircle size={20} color="#0DCAF0" />
        </span>
        <span className="mx-2" style={{ fontSize: "13px" }}>
          {title}
        </span>
      </p>
    </>
  );
}

export default WorkProgress;
