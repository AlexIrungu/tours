// src/components/ContactUs.js
import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <header className="navbar">
        {/* Your navigation bar */}
      </header>
      <main className="main-content">
        <div className="container">
          <ContactForm />
        </div>
      </main>
      <footer className="footer">
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default ContactUs;
