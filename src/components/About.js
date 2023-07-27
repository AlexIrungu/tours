import React from 'react';
import "./About.css"
function About(){
    return(
        <div>
             <main className="about-section">
        <div className="container">
          <div className="about-content">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget malesuada nulla. Proin iaculis consectetur ex. Ut consequat libero at lorem consequat hendrerit. Etiam dignissim eu urna eget consectetur. Nullam vitae felis at nunc tincidunt facilisis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget malesuada nulla. Proin iaculis consectetur ex. Ut consequat libero at lorem consequat hendrerit. Etiam dignissim eu urna eget consectetur. Nullam vitae felis at nunc tincidunt facilisis.</p>
          </div>
          <div className="about-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmcuclD4W2NQLcOx_FzDycMKvToYyaMxlkA&usqp=CAU" alt="About" />
          </div>
        </div>
      </main>
        </div>
    )

}
export default About