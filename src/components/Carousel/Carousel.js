import React from 'react';
import './Carousel.css';

const Carousel = () => (
 <div className="carousel-container container">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <div className="carousel-inner">
          <div className="carousel-item active">
            <h1>Slide one</h1>
          </div>
          <div className="carousel-item">
            <h1>Slide two</h1>
          </div>
          <div className="carousel-item">
          <h1>Slide three</h1>
          </div>
      </div>
    </div>
  </div>
);

export default Carousel;

