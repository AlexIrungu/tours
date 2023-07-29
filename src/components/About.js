import React, { useState } from 'react';
import "./About.css";
import ModalVideo from 'react-modal-video';
import people from './assets/people.jpg';
import k from './assets/k.jpeg';
import wild from './assets/wilderbeastsss.jpg';

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
          <div className="about-card-content">
            <h1 style={{ color: '#007bff' }}>Join Us</h1>
            <p style={{ color: '#333333' }}>
              Travelers who want to experience Kenya's spectacular beauty and cultural richness can join Danil Scenic Tours for an educational and enjoyable experience.
              With competent staff members who possess extensive knowledge and skills in tourism, travelers can expect seamless travel arrangements, personalized tour packages, and expert guidance throughout their journey. Whether it's witnessing awe-inspiring wildlife in national parks, immersing in local traditions, embarking on thrilling adventures, or simply enjoying the comfort of carefully selected accommodations, Danil Scenic Tours promises to deliver unforgettable memories and create cherished travel moments. Join us in discovering the wonders of Kenya
            </p>
          </div>
          <div className="about-card-overlay">
            <a href="#play-video" onClick={() => setOpen(true)}>Click to Play Video</a>
          </div>
        </div>

        {/* Additional image cards */}
        <div className="about-card">
          {/* Additional image 1 */}
          <img
            src={k}
            alt="Image 1"
            className="about-image"
          />
          {/* <div className="about-card-content">
            <h1 style={{ color: '#007bff' }}>Join Us</h1>
            <p style={{ color: '#333333' }}>
              Travelers who want to experience Kenya's spectacular beauty and cultural richness can join Danil Scenic Tours for an educational and enjoyable experience.
              With competent staff members who possess extensive knowledge and skills in tourism, travelers can expect seamless travel arrangements, personalized tour packages, and expert guidance throughout their journey. Whether it's witnessing awe-inspiring wildlife in national parks, immersing in local traditions, embarking on thrilling adventures, or simply enjoying the comfort of carefully selected accommodations, Danil Scenic Tours promises to deliver unforgettable memories and create cherished travel moments. Join us in discovering the wonders of Kenya
            </p>
          </div> */}
          <div className="about-card-overlay">
            <a href="#play-video" onClick={() => setOpen(true)}>Click to Play Video</a>
          </div>
        </div>

        <div className="about-card">
          {/* Additional image 2 */}
          <img
            src={wild}
            alt="Image 2"
            className="about-image"
          />
          <div className="about-card-overlay">
            <a href="#play-video" onClick={() => setOpen(true)}>Click to Play Video</a>
          </div>
        </div>

        {/* Additional about card */}
        <div className="about-card about-cta-card">
          <p style={{ color: '#333333' }}>
            Come, experience the magic of Kenya, where adventure, culture, and natural beauty await.
            Your journey of a lifetime begins here, with us. Let's make your travel dreams a reality.
            Welcome To Kenya.
          </p>
          <button className="cta-button" style={{ backgroundColor: '#007bff' }}>
            Book Your Adventure
          </button>
        </div>
      </main>

      <ModalVideo channel='youtube' isOpen={isOpen} videoId='irG_Kj21c1I' onClose={() => setOpen(false)} />
      <ModalVideo channel='youtube' isOpen={isOpen2} videoId='uayhhleFczc' onClose={() => setOpen2(false)} />
    </div>
  );
}

export default About;
