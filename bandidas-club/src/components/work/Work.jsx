import React from 'react'
import './work.css'
import Underwear from '../../assets/underwear.jpeg'
const Work = () => {
  return (
    <div id='work' className='work'>
      <h1>Productos</h1>
      <div className="underwear">
        <img src={Underwear} alt="" />
        <div className="under-text">
          <h2>Set Rosso</h2>
          <p>Éste hermoso set trae un bralette y braga color rojo pasión, sus apliques de mariposa morfo dius le dan un toque delicado a nuestro set, adicional puedes pedir los ligueros al color del set ♥</p>
        </div>
      </div>
      

    </div>
  )
}

export default Work