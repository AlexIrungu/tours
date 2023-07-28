import React, { useState } from "react";
import "./Service.css";
import park from './assets/park.jpeg';
import truck from './assets/danil scenic tours.jpg';
import lake from './assets/lake bogoria.jpg';
import guide from './assets/guides.jpeg';

function Service() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div className="service-page">
      <main className="service-section">
        <div className="service-container">
          <h1 className="service-heading">Our Services</h1>
          <div className="accordion">
            {/* National Parks and Game Reserves */}
            <div className={`service-card ${activeCard === 1 ? "active" : ""}`}>
              <div className="service-card-header" onClick={() => toggleCard(1)}>
                <img src={park} alt="National Parks" className="service-card-img" />
                <h2>National Parks and Game Reserves</h2>
              </div>
              <div className="service-card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla eget malesuada nulla. Proin iaculis consectetur ex. Ut
                  consequat libero at lorem consequat hendrerit. Etiam dignissim
                  eu urna eget consectetur.
                </p>
              </div>
            </div>

            {/* Transport Services */}
            <div className={`service-card ${activeCard === 2 ? "active" : ""}`}>
              <div className="service-card-header" onClick={() => toggleCard(2)}>
                <img src={truck} alt="Transport" className="service-card-img" />
                <h2>Transport Services</h2>
              </div>
              <div className="service-card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla eget malesuada nulla. Proin iaculis consectetur ex. Ut
                  consequat libero at lorem consequat hendrerit. Etiam dignissim
                  eu urna eget consectetur.
                </p>
              </div>
            </div>

            {/* Tour Guides */}
            <div className={`service-card ${activeCard === 3 ? "active" : ""}`}>
              <div className="service-card-header" onClick={() => toggleCard(3)}>
                <img src={guide} alt="Tour Guides" className="service-card-img" />
                <h2>Tour Guides</h2>
              </div>
              <div className="service-card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla eget malesuada nulla. Proin iaculis consectetur ex. Ut
                  consequat libero at lorem consequat hendrerit. Etiam dignissim
                  eu urna eget consectetur.
                </p>
              </div>
            </div>

            {/* Accommodation */}
            <div className={`service-card ${activeCard === 4 ? "active" : ""}`}>
              <div className="service-card-header" onClick={() => toggleCard(4)}>
                <img src={lake} alt="Accommodation" className="service-card-img" />
                <h2>Accommodation</h2>
              </div>
              <div className="service-card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla eget malesuada nulla. Proin iaculis consectetur ex. Ut
                  consequat libero at lorem consequat hendrerit. Etiam dignissim
                  eu urna eget consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Service;
