import React from "react";
import "./FAQ.css"

function Faq(){
    const faqData = [
        {
          question: "What are the popular tourist destinations in Kenya?",
          answer: "Some popular tourist destinations in Kenya are Maasai Mara National Reserve, Amboseli National Park, Tsavo National Park, and the coastal cities of Mombasa and Malindi.",
        },
        {
          question: "Is it safe to visit Kenya?",
          answer: "Yes, Kenya is generally safe for tourists. However, like any other destination, it is essential to take necessary precautions and be aware of your surroundings.",
        },
        {
          question: "What is the best time to visit Kenya?",
          answer: "The best time to visit Kenya is during the dry season, which is from June to October and January to February. This period offers the best wildlife viewing and pleasant weather.",
        },
        // Add more questions and answers as needed
      ];
    return(
        <div>
            <main className="faq-section">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

        </div>
    )

}
export default Faq