import React from "react";
import "./Home.css"

function Home(){
    return(
        <div className="home-page">
      
      <main className="hero-section">
        <div className="container">
          <div className="home-content">
            <h1>Welcome to Our Beautiful Destination</h1>
            <p>Experience the beauty of nature, culture, and adventure.</p>
          </div>
          <div className="hero-image">
            <img src="https://media.istockphoto.com/id/160189580/photo/zebras-in-the-morning.jpg?s=612x612&w=0&k=20&c=Va_jlYbW57Xtm3mNJYeNmz6uEv01UulFjZfhyTjo1uc=" alt="Hero" />
          </div>
        </div>
      </main>
      <section className="details-section">
        <div className="details-container">
          <div className="detail">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWC5L8ciPyoaooGlHodVbZvg2Tli4nnwKUA&usqp=CAU" alt="Image 1" />
            <h2>Explore Nature</h2>
            <p>Discover breathtaking landscapes and stunning natural wonders.</p>
          </div>
          <div className="detail">
            <img src="" alt="Image 2" />
            <h2>Experience Culture</h2>
            <p>Immerse yourself in the rich traditions and history of our destinations.</p>
          </div>
          <div className="detail">
            <img src="" alt="Image 3" />
            <h2>Adventure Awaits</h2>
            <p>Embark on thrilling adventures and create unforgettable memories.</p>
          </div>
        </div>
      </section>
     
    </div>
  );
};

    


export default Home