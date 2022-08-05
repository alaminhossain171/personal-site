import alaminimg from "../assets/alamin-dev.png";
import Styles from "../styles/BannerRightContent.module.css";
function BannerRightContent() {
  return (
    <div className={`${Styles.imgParent}`}>
      <img
        src={alaminimg}
        alt="Logo"
        className="img-fluid w-100 h-100"
        style={{
          borderRadius: "50%",
          padding: 5,
        }}
      />
    </div>
  );
}

export default BannerRightContent;
