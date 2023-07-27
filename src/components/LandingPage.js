import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'
function LandingPage(){
    return(
        // <div className="landing-page">
        //     <h1>Welcome to our tourism website</h1>
            <div className="landing-page">
      <header className="navbar">
        <div className="container">
          <h1 className="logo">Tourism Website</h1>
          {/* <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav> */}
        </div>
      </header>
      <main className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Our Beautiful Destination</h1>
            <p>Experience the beauty of nature, culture, and adventure.</p>
            <Link to="/home" className="btn btn-primary">Discover Now</Link>
          </div>
        </div>
      </main>
      <section className="image-section">
        <div className="container">
          <div className="image-gallery">
            {/* Add your images here */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Masai_Mara_at_Sunset.jpg" alt="Image 1" />
            <img src="/images/image2.jpg" alt="Image 2" />
            <img src="/images/image3.jpg" alt="Image 3" />
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