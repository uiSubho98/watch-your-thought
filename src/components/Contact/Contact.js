import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container container">
      <div className="contact-header text-center">
        <h2>Contact Us</h2>
        <p className="mt-2">
          Individuals / Corporates / Education Institutions
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-text">
        <h1 className="text-header text-center">
            We'd Love <br></br> to Hear <br></br> From{" "}
            <span className="highlight">You</span>
          </h1>
          <h3 className="text-footer">Please contact us to book an appointment <br></br> and for collaborations.</h3>
        </div>
        <div className="contact-form">
          <form className="components-form">
            <div className="compo1">
            <label className="labels">Your name / Name of the Organisation</label>
            <input className="w-100 input" type="text" />
            </div>
            <div className="compo1">
            <label className="labels">Email</label>
            <input className="w-100 input" type="text" />
            </div>
            <div className="compo1">
            <label className="labels">Subject</label>
            <textarea className="w-100 input" type="text" />
            </div>
            <div >
                <button className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
