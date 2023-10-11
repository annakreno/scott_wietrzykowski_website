import "./Work.css";
import { useState } from "react";

export default function Work() {

  const carousel = [
    <iframe className="youtube" src="https://www.youtube.com/embed/bxOBPI_b4VM" title="Good As Gold" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    <iframe className="youtube" src="https://www.youtube.com/embed/_z-bDHkiesY" title="Share Love with Sensory ‘Love Notes’ from Rice Krispies Treats + Autism Speaks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    <iframe className="youtube" src="https://www.youtube.com/embed/cYqGwbsCqpM" title="“The Lurker” Trailer (2019)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    <iframe className="vimeo" src="https://player.vimeo.com/video/730340299?h=2e5bc2c979" title="Fannie" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>,
    <div className="about-video">
      <h1>Sullivan</h1>
      <p>
        Sullivan High School sits in the Rogers Park neighborhood just north of the Chicago loop. Their soccer team, The Tigers, is made up of 14 different players from 13 different countries. They are the only urban team to compete in Chicago's highly competitive High School Premier League.
      </p>
      <p>
        Many of the players do not speak English, and rely on select teammates for translation. This film is a glimpse into their 2016 playoff run, and serves as a look into the passion and love these young men have for the sport that has helped them persevere through so much.
      </p>
      <div className="links-container">
        <a href="https://vimeo.com/247378786/4b5947d107?embedded=true&source=vimeo_logo&owner=33587629" className="page-link" id="sullivan-vimeo-link">
          Watch Sullivan on Vimeo
        </a>
      </div>
    </div>
    ]

    const [currentImage, setCurrentImage] = useState(carousel[0])
    const [idx, setIdx] = useState(0)

    const back = function() {
      if (idx === 0) {
        setIdx(carousel.length - 1)
        setCurrentImage(carousel[carousel.length - 1])
      } else {
        setIdx(idx - 1)
        setCurrentImage(carousel[idx - 1])
      }
    }
  
    const forward = function() {
      if (idx === carousel.length - 1) {
        setIdx(0)
        setCurrentImage(carousel[0])
      } else {
        setIdx(idx + 1)
        setCurrentImage(carousel[idx + 1])
      }
      console.log(idx)
    }

    return (
      <div className="page-container" id="work-page-container">

        <div className="links-container">
          <a href="https://www.imdb.com/name/nm7842959/" className="page-link">
              see Scott's credits on IMDb
          </a>
        </div>

        <div className="page-content" id="work-page-content">
        
          {currentImage}
            
          <div className="arrows-container" id="work-page-arrows-container">
            <img src='/images/right-arrow.png' className="arrow left-arrow work-page-arrow" onClick={back}/>  
            <img src='/images/right-arrow.png' className="arrow right-arrow work-page-arrow" onClick={forward}/>
          </div>
        
        </div>

      </div>
    );
  }

