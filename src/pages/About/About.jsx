import "./About.css";
import { useState } from "react";
import {Link} from "react-router-dom";

export default function About() {
  const [currentImage, setCurrentImage] = useState('/images/scott2.jpg')
  const carousel = ['/images/scott1.png', '/images/scott2.jpg', '/images/scott3.jpeg', '/images/equipment2.jpg']

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
      <div className="page-container" id="about-page-container">
        <div className="page-content" id="about-page-content">
          
          <div className="page-image">
            <div className="image-wrapper">
              <img id="headshot" className="image" src={currentImage} />
            </div>
            <div className="arrows-container">
              <img src='/images/right-arrow.png' className="arrow left-arrow" onClick={back}/>
              <img src='/images/right-arrow.png' className="arrow right-arrow" onClick={forward}/>
            </div>
          </div>
          
          <div  className="page-text">
            <h1 className="page-subtitle">
              Meet Scott.
            </h1>
            <br/>
            <div>
              Scott is a Chicago-based location sound recordist with 8+ years of experience providing professional recording services to a wide variety of productions. His expertise spans all positions within the sound department, and his experience spans all levels of production, from small short films documentaries, and internal corporate videos, to commercials, feature films, and large scale network television programs.
            </div>
            <br/>
            <div>
              Scott earned a Bachelor of Arts in Digital Cinema, with a concentration in Sound, from DePaul University in Chicago, Illinois, and has been working in the local industry ever since. Before setting out on his own as a full time freelancer, he spent a number of years as a technician at a local sound equipment rental house, where he was able to gain unique experience and expand his equipment expertise. When not on set, he enjoys cooking, and spending time with his cats.
            </div>
            <br/>
            <div className="links-container">
              <Link to="/contact" className="page-link">get in touch</Link>
            </div>
            
          </div>
        </div>
    </div>
    );
  }