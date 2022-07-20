import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { BsBookmarkCheck, BsGithub } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import Styles from "../styles/DevStatus.module.css";
import ContentTitle from "./ContentTitle";
import Status from "./Status";

export default function DevStatus() {
  return (
    <div className="mt-4">
      <ContentTitle title={"My Dev Stats"} />
      <div className={`card my-3 ${Styles.CardBg}`}>
        <div className={`row my-2`}>
          <Status
            icon={<BiCodeAlt size={30} className={Styles.statusIcon} />}
            name="Projects"
            count="25+"
          />
          <Status
            icon={<BsGithub size={30} className={Styles.statusIcon} />}
            name="Commits"
            count="3000+"
          />
          <Status
            icon={
              <RiUserSettingsLine size={30} className={Styles.statusIcon} />
            }
            name="Year Experience"
            count="1.5+"
          />
          <Status
            icon={<BsBookmarkCheck size={30} className={Styles.statusIcon} />}
            name="Blog reach"
            count="20+"
            lastChild={true}
          />
        </div>
      </div>
    </div>
  );
}
