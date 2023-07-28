import React, { useState } from "react";
import "./Service.css";

function Service() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div>
      <main className="service-section">
        <div className="service-container">
          <h1>Our Services</h1>
          <div className="accordion">
            {/* National Parks and Game Reserves */}
            <div className={`service-card ${activeCard === 1 ? "active" : ""}`}>
              <div className="service-card-header" onClick={() => toggleCard(1)}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJ1o7Jxs0mg1fcOBkD5C8dURQYlFSkZfhOw&usqp=CAU"
                  alt="National Parks"
                />
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
                <img
                  src="https://example.com/transport.jpg"
                  alt="Transport"
                />
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
                <img
                  src="https://example.com/tour-guides.jpg"
                  alt="Tour Guides"
                />
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
                <img
                  src="https://example.com/accommodation.jpg"
                  alt="Accommodation"
                />
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
