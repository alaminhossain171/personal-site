import React from "react";
import WorkProgress from "./WorkProgress";

function WorkExp() {
  return (
    <div className="px-3">
      <h6 className="">
        Software Engineer (React & React Native){" "}
        <span className="text-info ">@TFP Solution Ltd, Bangladesh</span>
      </h6>
      <h6 className="text-muted">July, 2021- Present</h6>

      <WorkProgress
        title={
          " Write performant code for different client and internal libraries"
        }
      />
      <WorkProgress
        title={" Test software to ensure responsiveness and efficiency."}
      />
      <WorkProgress title={" Toubleshoot, debug and upgrade software"} />
      <WorkProgress title={" Meeting both technical and consumer needs."} />
      <WorkProgress
        title={" Integrating front end ui with the constructed API"}
      />
      <WorkProgress title={" Write technical documentation."} />
    </div>
  );
}

export default WorkExp;
