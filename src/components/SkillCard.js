import Styles from "../styles/SkillCard.module.css";
function SkillCard({ title, icon }) {
  return (
    <div className={`card ${Styles.CardBg}`}>
      <div className="card-body d-flex justify-content-center ">
        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center ">
            {icon}
          </div>
          <div className="mx-3 d-flex justify-content-center align-items-center ">
            <h5>{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
