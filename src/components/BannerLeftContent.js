import { Animated } from "react-animated-css";
function BannerLeftContent() {
  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
      animationInDuration={1200}
    >
      <div className="sm-text">
        <p style={{ color: "#0DCAF0" }}>Hello I'm,</p>
        <h3>Md. Al Amin</h3>
        <h5 style={{ color: "#0DCAF0" }}>A Frontend Engineer</h5>
        <p className="left-content-font">
          Hello, buddy. This is
          <span
            style={{ color: "#0DCAF0", marginRight: 4, fontSize: "28px" }}
            className="fw-bold d-inline"
          >
            {" "}
            {`<>  Al Amin  </>`}.
          </span>
          I build things for the web and mobile. Currently, I am working as a
          Software Engineer
          <b className="text-info"> @ TFP Solution Ltd, Bangladesh</b> , a
          software firm. I Love writing clean and maintainable code for web and
          mobile applications, passionate about learning and exploring new
          technologies as well enthusiastic about UI/UX. As of my hobbies, I
          prefer reading books, travel, and listen to music.
        </p>

        <button className={`btn btn-outline-primary my-3`}>See my CV</button>
        <button className={`btn btn-outline-primary my-3 mx-2`}>
          Get in Touch
        </button>
      </div>
    </Animated>
  );
}

export default BannerLeftContent;
