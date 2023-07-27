import React from "react";
import "./Service.css"

function Service(){
    return(
        <div>
            <main className="service-section">
        <div className="container">
          <h1>Our Services</h1>
          <div className="service-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJ1o7Jxs0mg1fcOBkD5C8dURQYlFSkZfhOw&usqp=CAU" alt="National Parks" />
            <div className="service-content">
              <h2>National Parks and Game Reserves</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget malesuada nulla. Proin iaculis consectetur ex. Ut consequat libero at lorem consequat hendrerit. Etiam dignissim eu urna eget consectetur.</p>
            </div>
          </div>
          <div className="service-card">
            <img src="" alt="Transport" />
            <div className="service-content">
              <h2>Transport Services</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget malesuada nulla. Proin iaculis consectetur ex. Ut consequat libero at lorem consequat hendrerit. Etiam dignissim eu urna eget consectetur.</p>
            </div>
          </div>
          <div className="service-card">
            <img src="" alt="Tour Guides" />
            <div className="service-content">
              <h2>Tour Guides</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget malesuada nulla. Proin iaculis consectetur ex. Ut consequat libero at lorem consequat hendrerit. Etiam dignissim eu urna eget consectetur.</p>
            </div>
          </div>
          <div className="service-card">
            <img src="" alt="Accommodation" />
            <div className="service-content">
              <h2>Accommodation</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget malesuada nulla. Proin iaculis consectetur ex. Ut consequat libero at lorem consequat hendrerit. Etiam dignissim eu urna eget consectetur.</p>
            </div>
          </div>
        </div>
      </main>

        </div>
    )

}
export default Service