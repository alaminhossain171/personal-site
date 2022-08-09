import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ContentTitle from "../components/ContentTitle";
import ProjectCard from "../components/ProjectCard";
import data from "../DB/PersonalProjects";
import dataTeam from "../DB/TeamWorkProjects";

function Projects({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <Container>
      <ContentTitle title={"Personal Projects"} />
      <div className="row">
        {data.map((item) => {
          return (
            <ProjectCard
              key={item.id}
              name={item.name}
              brief={item.brief}
              tech={item.tech}
              live={item.live}
              git={item.git}
              img={item.img}
            />
          );
        })}
      </div>
      <ContentTitle title={"Team Work Projects"} />
      <div className="row">
        {dataTeam.map((item) => {
          return (
            <ProjectCard
              key={item.id}
              name={item.name}
              brief={item.brief}
              tech={item.tech}
              live={item.live}
              git={item.git}
              img={item.img}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default Projects;
