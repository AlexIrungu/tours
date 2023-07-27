import React, { useState } from 'react';
import "./About.css";
import ModalVideo from 'react-modal-video';

function About() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <main className="about-section">
        <div className="container">
          <div className="about-content">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget malesuada nulla. Proin iaculis consectetur ex. Ut consequat libero at lorem consequat hendrerit. Etiam dignissim eu urna eget consectetur. Nullam vitae felis at nunc tincidunt facilisis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget malesuada nulla. Proin iaculis consectetur ex. Ut consequat libero at lorem consequat hendrerit. Etiam dignissim eu urna eget consectetur. Nullam vitae felis at nunc tincidunt facilisis.</p>
            <button onClick={() => setOpen(true)}>Play Video</button>
          </div>
          <div className="about-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmcuclD4W2NQLcOx_FzDycMKvToYyaMxlkA&usqp=CAU" alt="About" />
          </div>
        </div>
      </main>

      <ModalVideo channel='youtube' isOpen={isOpen} videoId='irG_Kj21c1I' onClose={() => setOpen(false)} />
    </div>
  );
}

export default About;
