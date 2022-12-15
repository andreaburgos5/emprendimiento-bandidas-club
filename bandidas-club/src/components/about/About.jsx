import React from 'react'
import './about.css'
import Illustration1 from '../../assets/undraw.png'
import Illustration2 from '../../assets/undraw_clothes.png'
const About = () => {
  return (
    <div id='about' className='about'>
        <h1 className='whatwedo'>Lo que hacemos</h1>
        <div className="container">
            <p className='text-about'>Nos encargamos de diseñar y confeccionar prendas que busquen resaltar tu amor propio y te empoderen, hechas especialmente para ti.</p>
        </div>
        <div className="img-container">
            <img src={Illustration2} alt="illustration2" />
            <img src={Illustration1} alt="illustration1" />
        </div>
    </div>
  )
}

export default About