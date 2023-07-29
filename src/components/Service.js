import React, { useState } from "react";
import "./Service.css";
import park from './assets/park.jpeg';
import truck from './assets/danil scenic tours.jpg';
import lake from './assets/lake bogoria.jpg';
import guide from './assets/guides.jpeg';
import kulture from './assets/kulture.jpg';
import adventure from './assets/adventure.jpg';
import tailor from './assets/tailor-made.jpg';

function Service() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="service-page">
      <main className="service-section">
        <div className="service-container">
          <h1 className="service-heading">Our Services</h1>
          <p>Our mission is to showcase the breathtaking beauty and rich cultural heritage of Kenya, allowing you to explore its diverse landscapes and immerse yourself in the wonders of this enchanting country.</p>
          <div className="accordion">


            {/* National Parks and Game Reserves */}
            <div className={`service-card ${activeCard === 1 ? "active" : ""}`} >
              <div className="service-card-header" onClick={() => toggleCard(1)} >
                <img src={park} alt="National Parks" className="service-card-img" />
                <h2>National Parks and Game Reserves</h2>
              </div>
              <div className={`service-card-content ${activeCard === 1 ? "active" : ""}`}>
                <p>
                  Embark on thrilling safaris to some of the world's most renowned national parks and game reserves. Witness the awe-inspiring wildlife in their natural habitats, from the majestic elephants roaming freely to the graceful big cats prowling the savannah. Our experienced guides will ensure you have a safe and rewarding encounter with Kenya's incredible wildlife.
                </p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>

            {/* Transport Services */}
            <div className={`service-card ${activeCard === 2 ? "active" : ""}`} >
              <div className="service-card-header" onClick={() => toggleCard(2)} >
                <img src={truck} alt="Transport" className="service-card-img" />
                <h2>Transport Services</h2>
              </div>
              <div className={`service-card-content ${activeCard === 2 ? "active" : ""}`}>
                <p>
                  Sit back, relax, and enjoy the journey as we provide you with seamless and comfortable transport services. From airport transfers to road trips and inter-city travel, our modern and well-maintained vehicles will take you to your destination with ease. Travel hassle-free and make the most of your time exploring the beauty of Kenya.
                </p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>

            {/* Tour Guides */}
            <div className={`service-card ${activeCard === 3 ? "active" : ""}`} >
              <div className="service-card-header" onClick={() => toggleCard(3)} >
                <img src={guide} alt="Tour Guides" className="service-card-img" />
                <h2>Tour Guides</h2>
              </div>
              <div className={`service-card-content ${activeCard === 3 ? "active" : ""}`}>
                <p>
                  Our knowledgeable and passionate tour guides will be your trusted companions on your Kenyan journey. They will share fascinating stories about the country's history, culture, and traditions, enriching your travel experience. With their expertise, you'll gain a deeper understanding of Kenya's heritage and the unique characteristics of each destination.
                </p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>

            {/* Cultural Experiences */}
            <div className={`service-card ${activeCard === 4 ? "active" : ""}`} >
              <div className="service-card-header" onClick={() => toggleCard(4)} >
                <img src={kulture} alt="Cultural Experiences" className="service-card-img" />
                <h2>Cultural Experiences</h2>
              </div>
              <div className={`service-card-content ${activeCard === 4 ? "active" : ""}`}>
                <p>
                  Immerse yourself in the rich cultural diversity of Kenya through our cultural experiences. Engage with local communities, witness traditional ceremonies, and learn about age-old customs that have shaped the country's identity. These interactions will provide you with a genuine insight into the vibrant tapestry of Kenyan culture.
                </p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>

            {/* Adventure Activities */}
            <div className={`service-card ${activeCard === 5 ? "active" : ""}`} >
              <div className="service-card-header" onClick={() => toggleCard(5)} >
                <img src={adventure} alt="Adventure Activities" className="service-card-img" />
                <h2>Adventure Activities</h2>
              </div>
              <div className={`service-card-content ${activeCard === 5 ? "active" : ""}`}>
                <p>
                  For the thrill-seekers, we offer a range of exciting adventure activities. From hot air balloon safaris over the Maasai Mara to exhilarating hikes up Mount Kenya and thrilling water sports along the pristine coastline, there's something to get your adrenaline pumping while enjoying Kenya's stunning landscapes.
                </p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>

            {/* Tailor-Made Tours */}
            <div className={`service-card ${activeCard === 6 ? "active" : ""}`} >
              <div className="service-card-header" onClick={() => toggleCard(6)} >
                <img src={tailor} alt="Tailor-Made Tours" className="service-card-img" />
                <h2>Tailor-Made Tours</h2>
              </div>
              <div className={`service-card-content ${activeCard === 6 ? "active" : ""}`}>
                <p>
                  We understand that every traveler has unique preferences and interests. That's why we offer tailor-made tours, allowing you to design your dream itinerary. Whether you're a wildlife enthusiast, a cultural explorer, or a leisure traveler, we'll curate a personalized experience to match your desires.
                </p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>

            {/* Accommodation */}
            <div className={`service-card ${activeCard === 7 ? "active" : ""}`} >
              <div className="service-card-header" onClick={() => toggleCard(7)} >
                <img src={lake} alt="Accommodation" className="service-card-img" />
                <h2>Accommodation</h2>
              </div>
              <div className={`service-card-content ${activeCard === 7 ? "active" : ""}`}>
                <p>
                  Experience the utmost comfort and relaxation in our carefully selected accommodations. Whether you prefer luxury lodges with stunning views or cozy eco-friendly campsites close to nature, we have options to suit every traveler's preference. Our accommodations offer warm hospitality and modern amenities, ensuring you have a restful stay after exciting days of adventure.
                </p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Service;
