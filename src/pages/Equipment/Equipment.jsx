import "./Equipment.css"
import {Link} from "react-router-dom";
import { useState } from "react";

export default function Equipment() {

  const [currentImage, setCurrentImage] = useState('/images/equipment1.jpg')
  const carousel = ['/images/equipment1.jpg', '/images/equipment3.jpeg']

  const back = function() {
    const idx = carousel.indexOf(currentImage)
    if (idx === 0) {
      setCurrentImage(carousel[carousel.length - 1])
    } else {
      setCurrentImage(carousel[idx - 1])
    }
  }

  const forward = function() {
    const idx = carousel.indexOf(currentImage)
    if (idx === carousel.length - 1) {
      setCurrentImage(carousel[0])
    } else {
      setCurrentImage(carousel[idx + 1])
    }
  }

    return (
      <div className="page-container" id="equipment-page-container">
        
        <div className="links-container" id="equipment-links-container">
          <Link to="/contact" className="page-link">get a quote</Link>
        </div>
        
        <div className="page-content" id="equipment-page-content">

          
          <div className="package-container">
            <h1 className="package-name">
              Basic Equipment Package
            </h1>
            <ul>
              <li>8-channel Sound Devices mixer/recorder</li>
              <li>2 Lectrosonics wireless packs with professional quality lavalier microphones</li>
              <li>Boom with a variety of microphones depending on the set location and attributes</li>
              <li>Tentacle timecode sync for 1 camera</li>
            </ul>
            <div className="package-details">
              Additional equipment is available upon request. Please reach out via phone or email if you require additional gear, or if you are unsure of your project's specific needs.  
            </div>
          </div>

          <div className="page-image" id="equipment-page-image">
            <div className="image-wrapper">
              <img className="image" src={currentImage} />
            </div>
            
            <div className="arrows-container">
              <img src='/images/right-arrow.png' className="arrow left-arrow" onClick={back}/>
              <img src='/images/right-arrow.png' className="arrow right-arrow" onClick={forward}/>
            </div>
          </div>













          
        </div>

      </div>
    );
  }