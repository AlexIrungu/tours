import React, { useState } from 'react';
import "./About.css";
import ModalVideo from 'react-modal-video';
import people from './assets/people.jpg'
import k from './assets/k.jpeg'
import wild from './assets/wilderbeastsss.jpg'
function About() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  return (
    <div>
      <main className="about-section">
        {/* About card */}
        <div className="about-card">
          <h1 style={{ color: '#007bff' }}>About Us</h1>
          <p style={{ color: '#333333' }}>
            DANIL SCENIC TOURS is a private limited company registered in Kenya founded by two shareholders/directors. It is located along Northern Bypass, Ebenezer Building. Being licensed by the Tourism Regulatory Authority as a Tour operator, it provides practical support to local and Foreign tourists in Kenya and deals with various organizational aspects of a trip ranging from creating touristic packages, determining the needs of various categories of clients, and making travel arrangements (accommodation, transport, meals, tours, insurance, and so on).
            The company has competent staff members with requisite knowledge and skills in tourism.
          </p>
        </div>

        {/* Image container */}
        <div className="about-image-container">
          <img
            src={people}
            alt="About"
            className="about-image"
          />
          <button onClick={() => setOpen(true)} className="play-video-button" style={{ backgroundColor: '#ff5722' }}>
            Play Video 1
          </button>
        </div>

        {/* Additional image cards */}
        <div className="about-card">
          {/* Additional image 1 */}
          <img
            src={k}
            alt="Image 1"
            className="about-image"
          />
        </div>

        <div className="about-card">
          {/* Additional image 2 */}
          <img
            src={wild}
            alt="Image 2"
            className="about-image"
          />
        </div>

        {/* Additional about card */}
        <div className="about-card">
          <p style={{ color: '#333333' }}>
          Come, experience the magic of Kenya, where adventure, culture, and natural beauty await. 
          Your journey of a lifetime begins here, with us. Let's make your travel dreams a reality. 
            Welcome To Kenya .  </p>.
        </div>
      </main>

      <ModalVideo channel='youtube' isOpen={isOpen} videoId='irG_Kj21c1I' onClose={() => setOpen(false)} />
      <ModalVideo channel='youtube' isOpen={isOpen2} videoId='uayhhleFczc' onClose={() => setOpen2(false)} />
    </div>
  );
}

export default About;
