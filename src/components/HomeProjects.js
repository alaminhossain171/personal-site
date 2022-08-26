import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import data from "../DB/HomeProjects";
import ContentTitle from "./ContentTitle";
import HomeProjectCard from "./HomeProjectCard";
export default function HomeProjects() {
  return (
    <>
      <ContentTitle title={"My Projects"} />
      <div className="my-4">
        <div className="">
          <div className="row my-4 ">
            {data.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch"
                >
                  <HomeProjectCard
                    title={item.title}
                    details={item.details}
                    technology={item.technology}
                    url={item.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center">
          <Link to={'/projects'}>
          <button className="btn btn-outline-primary">
            See More
            <BiRightArrow />
          </button>
          </Link>
        
        </div>
      </div>
    </>
  );
}
