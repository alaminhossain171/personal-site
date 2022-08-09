import React from "react";
import { MdRecommend } from "react-icons/md";
import ContentTitle from "./ContentTitle";
import ThoughtSlider from "./ThoughtSlider";
export default function Thoughts() {
  return (
    <>
      <ContentTitle title={"Thoughts about me"} />
      <ThoughtSlider />
      <div className="text-center mb-3">
        <button className="btn btn-outline-primary">
          Send recommendation
          <MdRecommend />
        </button>
      </div>
    </>
  );
}
