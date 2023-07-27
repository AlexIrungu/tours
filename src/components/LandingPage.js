import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import './LandingPage.css'

function LandingPage(){
    return(
       
     <div className="landing-page">
     
      <main className="hero-section">
        <div className="container">
        <div className="hero-image-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/17/Masai_Mara_at_Sunset.jpg"
                alt="Image 1"
              />
          <div className="hero-content">
            <h1>
          <span>Welcome to Our Beautiful Destination</span>
          </h1>
            <p>Experience the beauty of nature, culture, and adventure.</p>
            <Link to="/home" className="btn btn-primary">Discover Now</Link>
          </div>
        </div>
        </div>
      </main>
      <section className="image-section">
        <div className="container">
          <div className="image-gallery">
            {/* Add your images here */}
           
            
            {/* <img src="/images/image2.jpg" alt="Image 2" />
            <img src="/images/image3.jpg" alt="Image 3" /> */}
          </div>
        </div>
      </section>
      <section className="follow-us-section">
        <div className="container">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://twitter.com/your_twitter_handle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.facebook.com/your_facebook_page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/your_instagram_handle"
              target="_alexirungu"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/your_linkedin_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Tourism Website. All rights reserved.</p>
        </div>
      </footer>

        </div>
    )
}

export default LandingPage