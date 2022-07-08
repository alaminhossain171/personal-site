import ContentTitle from "../components/ContentTitle";
import SkillCard from "../components/SkillCard";
import data from "../DB/Skills";
function Skills() {
  return (
    <>
      <ContentTitle title={`I'm skilled at`} />

      <div className="row my-2">
        {data.map((item, index) => {
          return (
            <div key={index} className="col-sm-12 col-md-4 col-lg-3 my-2">
              <SkillCard title={item.title} icon={item.icon} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
