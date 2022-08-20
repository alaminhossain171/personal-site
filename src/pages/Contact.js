import React, { useEffect } from "react";
import ContactDescription from "../components/ContactDescription";
import ContactForm from "../components/ContactForm";
import ContentTitle from "../components/ContentTitle";

function Contact({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="container">
      <div className="text-center my-5">
        <ContentTitle title={"Stay Tuned To Get Latests"} />
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <ContactDescription />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div>
            {" "}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
