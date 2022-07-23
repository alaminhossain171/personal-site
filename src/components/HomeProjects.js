import React from "react";
import ContentTitle from "./ContentTitle";
import HomeProjectCard from "./HomeProjectCard";
export default function HomeProjects() {
  return (
    <>
      <ContentTitle title={"My Projects"} />
      <div className="my-4">
        <div className="">
          <div className="row my-4 ">
            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 d-flex align-items-stretch">
              <HomeProjectCard
                title={"Happy Center (Passport Embassy)"}
                details="  Happy Centre is working on behalf of the Bangladesh Embassy in
            Kuwait to provide passport and legalization services for the
            Bangladeshi workers in Kuwait. Happy Centre is one of the most
            established names in Kuwait.
              "
                technology={["HTML", "CSS", "BootStrap", "Jquery", "Laravel"]}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 d-flex align-items-stretch">
              <HomeProjectCard
                title={
                  "Migration Governance Eco-system (Recruitmentand System)"
                }
                details="A foreign employee recruitment
                and management System. MGES is a  Bangladeshi-owned company that is active in the field of information technology with numerous years of experience."
                technology={["HTML", "CSS", "BootStrap", "Jquery", "Laravel"]}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 d-flex align-items-stretch">
              <HomeProjectCard
                title={"Hello SuperStars (Social Media App)"}
                details="Hello Superstars is a social media platfrom. Where people can meet there favorite celebrity and many more.There many Event available here for example meetup event, live chat, QA event, Learning Session and many more.. "
                technology={["HTML", "CSS", "React", "Bootstrap", "Laravel"]}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 d-flex align-items-stretch">
              <HomeProjectCard
                title={"Hello SuperStars (Social Media App)"}
                details="Hello Superstars is a social media platfrom. Where people can meet there favorite celebrity and many more.There many Event available here for example meetup event, live chat, QA event, Learning Session and many more.. "
                technology={["HTML", "CSS", "React", "Bootstrap", "Laravel"]}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 d-flex align-items-stretch">
              <HomeProjectCard
                title={"Hello SuperStars (Social Media App)"}
                details="Hello Superstars is a social media platfrom. Where people can meet there favorite celebrity and many more.There many Event available here for example meetup event, live chat, QA event, Learning Session and many more.. "
                technology={["HTML", "CSS", "React", "Bootstrap", "Laravel"]}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 d-flex align-items-stretch">
              <HomeProjectCard
                title={"Hello SuperStars (Social Media App)"}
                details="Hello Superstars is a social media platfrom. Where people can meet there favorite celebrity and many more.There many Event available here for example meetup event, live chat, QA event, Learning Session and many more.. "
                technology={["HTML", "CSS", "React", "Bootstrap", "Laravel"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
