import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <main className="home-section">
        <div className="home-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Our Beautiful Destination
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience the beauty of nature, culture, and adventure.
          </motion.p>
        </div>
        <div className="hero-image">
          <motion.img
            src="https://media.istockphoto.com/id/160189580/photo/zebras-in-the-morning.jpg?s=612x612&w=0&k=20&c=Va_jlYbW57Xtm3mNJYeNmz6uEv01UulFjZfhyTjo1uc="
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
            <h2>Explore Nature</h2>
            <p>Discover breathtaking landscapes and stunning natural wonders.</p>
          </motion.div>
          <motion.div
            className="detail"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="" alt="Image 2" />
            <h2>Experience Culture</h2>
            <p>Immerse yourself in the rich traditions and history of our destinations.</p>
          </motion.div>
          <motion.div
            className="detail"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="" alt="Image 3" />
            <h2>Adventure Awaits</h2>
            <p>Embark on thrilling adventures and create unforgettable memories.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
