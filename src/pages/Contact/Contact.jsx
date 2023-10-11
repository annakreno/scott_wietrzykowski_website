import "./Contact.css"
import {useState} from "react";


export default function Contact() {
  const [activeClass, setActiveClass] = useState("inactive")

  function handleClick() {
    activeClass === "active" ? setActiveClass("active") : setActiveClass("active")
  }

  return (
    <div className="page-container">
      
      <div className="page-content" id="contact-page-content">

        <h1 className="page-subtitle" id="contact-page-subtitle">
          Interested in working together?
        </h1>
        

        <div className={activeClass} onClick={handleClick} >
                
          { activeClass === "active" ?
            <>
              <a href="mailto:swietrz@gmail.com" className="cta">
                <img src="/images/email.png" className="icon" />
                &nbsp;
                swietrz@gmail.com
              </a>
              &nbsp;
              &nbsp;
              <a href="tel:224-465-6568" className="cta">
                <img src="/images/phone.png" className="icon"/>
                &nbsp;
                (224) 465-6568
              </a>
              
            </>
              : "reveal email + phone"
          }
          
        </div>
        <br/>
        <br/>
        <br/>

        <div className="page-text" id="contact-page-text">
          <ul>Please include the below information to receive an accurate quote:
            <br/>
            <br/>
            <li>What style is the project (sit-down interviews, scripted in a studio, vérité documentary, man-on-the-street, etc.)?</li>
            <li>How many wireless microphones will be needed?</li>
            <li>How many IFB, or individual listening devices are needed?</li>
            <li>What form of sync is needed (sync box, and/or camera hops, and/or slate)? If unsure, feel free to send the contact information for the editor or post-production supervisor.</li>
            <li>How many cameras and what are their make/model? If unsure, feel free to send the contact information for the Director of Photography.</li>
          </ul>
        </div>

        <div className="contact-links-container">
          <a href="https://www.linkedin.com/in/scott-wietrzykowski-b17a54157/">
            <img src="/images/linkedin.png" className="icon" />
          </a>
          &nbsp;
          &nbsp;
          <a href="https://m.facebook.com/swietr/">
            <img src="/images/facebook.png" className="icon" />
          </a>
          &nbsp;
          &nbsp;
          <a href="https://www.instagram.com/dubscribble/">
            <img src="/images/instagram.png" className="icon" />
          </a>
          &nbsp;
          &nbsp;
          <a href="https://www.imdb.com/name/nm7842959/" className="icon-link" id="imdb-container">
            <img src="/images/imdb.png" className="icon" />
          </a>
        </div>

      </div>

    </div>
  );
}