function BannerLeftContent() {
  return (
    <div className="sm-text">
      <p style={{ color: "#0DCAF0" }}>Hello I'm,</p>
      <h3>Md. Al Amin</h3>
      <h5 style={{ color: "#0DCAF0" }}>A Frontend Engineer</h5>
      <p className="left-content-font">
        Hello, buddy. This is
        <h3
          style={{ color: "#0DCAF0", marginRight: 4 }}
          className="fw-bold d-inline"
        >
          {" "}
          {`<>  Al Amin  </>`}.
        </h3>
        I build things for the web and mobile. Currently, I am working as a
        Software Engineer
        <span className="text-info"> @ TFP Solution Ltd, Bangladesh</span> , a
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
  );
}

export default BannerLeftContent;
