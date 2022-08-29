import { useTheme } from "../context/ThemeContext";
import Styles from "../styles/SkillCard.module.css";
function SkillCard({ title, icon }) {
  const {isDarkMode}=useTheme()

  return (
    <div className={`card shadow ${!isDarkMode?Styles.CardBgDark:Styles.CardBgLight}`}>
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
