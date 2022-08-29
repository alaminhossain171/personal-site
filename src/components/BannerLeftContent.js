import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";


function BannerLeftContent() {

  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
      animationInDuration={1200}
    >
      <div className="sm-text">
        <p style={{ color: "#2E96C7" }}>Hello I'm,</p>
        <h3>Md. Al Amin</h3>
        <h5 style={{ color: "#2E96C7" }}>A Frontend Engineer</h5>
        <p className="left-content-font">
          Hello, buddy. This is
          <span
            style={{ color: "#2E96C7", marginRight: 4, fontSize: "22px" }}
            className="fw-bold d-inline"
          >
            {" "}
            {`<>  Al Amin  </>`}.
          </span>
          I build things for the web and mobile. Currently, I am working as a
          Software Engineer
          <b style={{ color: "#2E96C7" }}> @ TFP Solution Ltd, Bangladesh</b> ,
          a software firm. I Love writing clean and maintainable code for web
          and mobile applications, passionate about learning and exploring new
          technologies. As of my hobbies, I prefer reading books, travel, and
          listen to music.
        </p>
<a className={`btn btn-sm btn-primary my-3`} href="https://drive.google.com/drive/folders/1QFvECgzpuuSC-cOlBbQ-z_8deyi7tLSk?usp=sharing" target={'_blank'} rel="noreferrer">See my cv</a>
     
      <Link to='/contact'>
      <button className={`btn btn-sm btn-primary my-3 mx-2`}>Get in touch</button></Link>
       
      </div>
    </Animated>
  );
}

export default BannerLeftContent;
