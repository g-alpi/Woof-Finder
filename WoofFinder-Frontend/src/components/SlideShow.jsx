import React from 'react'
import { useState } from 'react'
import "../assets/styles/App.css"
import headerPicture1 from '../assets/styles/sources/headerPicture1.jpg';
import headerPicture2 from '../assets/styles/sources/headerPicture2.jpg';
import headerPicture3 from '../assets/styles/sources/headerPicture3.jpg';


export default function SlideShow() {
  let sliderData = [
    
    {
      image: headerPicture1,
      heading:"Woof Finder",
      desc:"Tu mascota esta esperando por ti...Encuentra el mejor lugar para adoptar."
    },

    {
      image:headerPicture2,
      heading:"Woof Finder",
      desc:"Tu mascota esta esperando por ti...Encuentra el mejor lugar para adoptar."
    },

    {
      image:headerPicture3,
      heading:"Woof Finder",
      desc:"Tu mascota esta esperando por ti...Encuentra el mejor lugar para adoptar."
    }
  ]

  const [currentSlide, setcurrentSlide] = useState(0)

  return (
    <div className='slider'>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <i className="fa-solid fa-angle-left"></i>
      <i className="fa-solid fa-angle-right"></i>
      
      {sliderData.map((slide, index) => {
        return(
          <div className={index === currentSlide ? "slide current" : slide} key ={index}>
            {index === currentSlide && (
              <>
              <img src={slide.image} alt="slide"/>
              <div className="content">
                <h1 className='heading'>{slide.heading}</h1>
                <p className='description'>{slide.desc}</p>
                <button className="--btn--btn--primary">Ger Started</button>
              </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )}