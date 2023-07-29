import React from "react";
import ContactForm from "./ContactForm";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* <header className="navbar">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </header> */}
      <main className="main-content">
        <div className="container">
          <ContactForm />
        </div>
      </main>
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Tourism Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
