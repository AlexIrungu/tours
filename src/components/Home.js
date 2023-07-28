import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import makiwa from "./assets/makiwa-hd.png";
import maasai from "./assets/maasai.jpg";
import transport from "./assets/transport.jpg";
import beauty from './assets/beauty.jpg'

function Home() {
  return (
    <div className="home-page">
      <main className="home-section" 
      style={{backgroundImage: `url(${beauty})`}}
      >
        <div className="home-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#333" }}
          >
            Welcome to Our Stunning Tourism Website
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}
          >
            Immerse yourself in the wonders of our diverse landscapes, rich culture, and thrilling adventures. From the pristine beaches of our coastal cities to the majestic mountains and lush forests of the interior, there are endless treasures to be discovered. Join us in exploring the hidden gems and iconic landmarks that make our country a dream destination for travelers from all corners of the world. Unravel the mysteries of history, soak in the serenity of nature, and create unforgettable memories that will last a lifetime. Come, be enchanted by the wonders that await you. Your adventure starts here!
          </motion.p>
        </div>
        <div className="hero-image">
          <motion.img
            src={makiwa}
            alt="Hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </main>
      <section className="details-section">
        <div className="details-container">
          <motion.div
            className="detail"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWC5L8ciPyoaooGlHodVbZvg2Tli4nnwKUA&usqp=CAU"
              alt="Image 1"
            />
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>Explore Nature</h2>
            <p style={{ color: "#555" }}>Discover breathtaking landscapes and stunning natural wonders.</p>
          </motion.div>
          <motion.div
            className="detail"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={maasai} alt="Image 2" />
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>Experience Culture</h2>
            <p style={{ color: "#555" }}>Immerse yourself in the rich traditions and history of our destinations.</p>
          </motion.div>
          <motion.div
            className="detail"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={transport} alt="Image 3" />
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>Adventure Awaits</h2>
            <p style={{ color: "#555" }}>Embark on thrilling adventures and create unforgettable memories.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
