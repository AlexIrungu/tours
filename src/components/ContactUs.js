// src/components/ContactUs.js
import React from "react";
import ContactForm from "./ContactForm";
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className="contact-us">
      <header className="navbar">
        {/* Your navigation bar */}
        <h1>Contact Us</h1>
      </header>
      <main className="main-content">
        <div className="container">
          <ContactForm />
        </div>
      </main>
      <footer className="footer">
        {/* Your footer content */}
        <p>&copy; 2023 Tourism Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
