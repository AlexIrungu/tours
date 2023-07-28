import React, { useState } from 'react';
import "./About.css";
import ModalVideo from 'react-modal-video';

function About() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  return (
    <div>
      <main className="about-section">
        <div className="container">
          <div className="about-content">
            <h1 style={{ color: '#007bff' }}>About Us</h1>
            <p style={{ color: '#333333' }}>
              DANIL SCENIC TOURS is a private limited company registered in Kenya founded by two shareholders/directors. It is located along Northern Bypass, Ebenezer Building. Being licensed by the Tourism Regulatory Authority as a Tour operator, it provides practical support to local and Foreign tourists in Kenya and deals with various organizational aspects of a trip ranging from creating touristic packages, determining the needs of various categories of clients, and making travel arrangements (accommodation, transport, meals, tours, insurance, and so on).
              The company has competent staff members with requisite knowledge and skills in tourism.
            </p>
            <p style={{ color: '#333333' }}>The staff members include; Tour guide/drivers, Tour consultants, and Project Managers.</p>
          </div>
          <div className="about-image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmcuclD4W2NQLcOx_FzDycMKvToYyaMxlkA&usqp=CAU" alt="About" className="about-image" />
          </div>
        </div>
      </main>

      <ModalVideo channel='youtube' isOpen={isOpen} videoId='irG_Kj21c1I' onClose={() => setOpen(false)} />
      <button onClick={() => setOpen(true)} className="play-video-button" style={{ backgroundColor: '#ff5722' }}>Play Video 1</button>

      <ModalVideo channel='youtube' isOpen={isOpen2} videoId='uayhhleFczc' onClose={() => setOpen2(false)} />
      <button onClick={() => setOpen2(true)} className="play-video-button" style={{ backgroundColor: '#ff5722' }}>Play Video 2</button>
    </div>
  );
}

export default About;
