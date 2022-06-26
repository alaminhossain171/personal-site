function BannerLeftContent() {
  return (
    <div className="sm-text">
      <p style={{ color: "#0DCAF0" }}>Hello I'm,</p>
      <h3>Md. Al Amin</h3>
      <h5 style={{ color: "#0DCAF0" }}>A Frontend Engineer</h5>
      <p>
        Hello, buddy. This is
        <span style={{ color: "#0DCAF0", marginRight: 4 }} className="fw-bold">
          {" "}
          {`<>Al Amin</>`};
        </span>
        I build things for the web. Currently, I am working as a Software
        Engineer @ TFP Solution LTD, a software firm. I Love writing clean and
        maintainable code for web and mobile applications, passionate about
        learning and exploring new technologies as well enthusiastic about
        UI/UX. As of my hobbies, I prefer reading books, travel, and listen to
        music.
      </p>

      <button className={`btn btn-outline-primary my-3`}>See my CV</button>
      <button className={`btn btn-outline-primary my-3 mx-2`}>
        Get in Touch
      </button>
    </div>
  );
}

export default BannerLeftContent;
