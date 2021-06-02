import React, { useState } from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length; 

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1: current - 1);   
    }; 

    console.log(current);


    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (

        <div>
        <div id='header'>
        <h1>Story AR!</h1>
        <h2>An interactive Augmented Reality Game! Welcome to a new World. </h2>
        <p>A program by Jason Pham, Nikhita Paul, Scott West and Cameron Howling.</p> <br></br>

      </div>
        
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

          {SliderData.map((slide, index) => {
              return (
                  <div className={index === current ? 'slide active' : 'slide'} key =
                  {index}>
                      {index === current && (
                      <img src={slide.image} alt="travel image" className='image' />
                      )}
                  </div>        )
              
          })}
        </section>
        <br></br>
        <a href="https://reactjs.org/"><button className="Start">Create Account</button></a>
        <br></br>
        <br></br>
        <a href="https://reactjs.org/"><button className="Start">Play Game</button></a>
        <br></br>
        <br></br>

        <footer class="col s12">
        <h3>More Information</h3>
            <a href="https://www.w3schools.com/" target="_blank">W3Schools!</a> <br></br>
            <a href="https://www.youtube.com/watch?v=H7ZHemE2nRs" target="_blank">How Augmented Reality Works</a> <br></br>
            <a href="https://materializecss.com/text-inputs.html" target="_blank">Materialize</a> 
        </footer>
            <br></br>
        </div>
    );
}

export default ImageSlider;
