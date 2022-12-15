import React from 'react'
import './contact.css'
import Insta from '../../assets/insta.png'
import Whatss from '../../assets/whatsapp.png'

const Contact = () => {
    return (
        <div id='contact' className="contact">
            <h1>Contáctanos</h1>
            <p>Para mayor información de nuestros productos, puedes comunicarte con nosotros a través de:
            </p>
            <div className="links-social">
                <a href="https://www.instagram.com/bandidasclub_/" target="_blank">
                    <img className='insta' src={Insta} alt="" />
                </a>
                <a href="https://wa.me/3103319519" target="_blank">
                    <img  className='what' src={Whatss} alt="" />
                </a>
            </div>
        </div>
    )
}
export default Contact