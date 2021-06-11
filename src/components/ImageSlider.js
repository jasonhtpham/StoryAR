import React, { useState } from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { Link } from "react-router-dom";


const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length; 

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1: current - 1);   
    }; 

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    
    return (

        <div>
        <div id='header'>
        <h1>Story Augmented Reality - Let's have fun!</h1>
        <p>An interactive Augmented Reality Game! Welcome to a new World.
        A fun program by Jason Pham, Nikhita Paul, Scott West and Cameron Howling.</p> <br></br>

      </div>
        
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

          {SliderData.map((slide, index) => {
              return (
                  <div className={index === current ? 'slide active' : 'slide'} key =
                  {index}>
                      {index === current && (
                      <img src={slide.image} alt="travel" className='image' />
                      )}
                  </div>        )
              
          })}
        </section>
        <br></br>
        <Link to="/register">
            <button>Create Account</button><span> </span>
        </Link>
            <button href="https://www.youtube.com/channel/UCyZkZgcTMCvvrxSQF2wkoHA">Log In to Play</button>
            <span> </span>
        <Link to="/feedback"> 
          <button>Provide Feedback</button>
        </Link>
        <Link to="/rocket"> 
          <button>Rocket Ship</button>
        </Link>
        <br></br>
        <br></br>

        <footer>
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h3 class="white-text">More Information and Links</h3>
              </div>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.deakin.edu.au/study/find-a-course/information-technology">Information Technology at Deakin</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.deakin.edu.au/">Deakin University</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.youtube.com/watch?v=H7ZHemE2nRs&t=1s">How Augmented Reality Works</a></li>
                </ul>
              </div>
            </div>
          <div>
            © 2021 Copyright Text
          </div>
        </footer>
    


        </div> 

        
    );
}

export default ImageSlider;
