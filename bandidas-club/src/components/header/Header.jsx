import React from 'react'
import './header.css'
import Girl from '../../assets/model.png'
const Header = () => {
  return (
    <div id='home' className='header'>
        <div className="text">
            <h1 className='new-collection'>Nueva Colección</h1>
            <h1 className='lingerie'>Lingerie a tu medida</h1>
            <a className='link' href="/" target="_blank">Ver Catálogo</a>
        </div>
        <div className="img">
            <img src={Girl} alt="girl" />
        </div>
        
    </div>
  )
}

export default Header