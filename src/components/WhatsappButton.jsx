import React, { useState } from 'react'
import whatsappButton from '../images/icons/whatsapp_button.svg';
import PopUpWhatsapp from './PopUpWhatsapp'

const button = 'w-12 md:w-32 bottom-4 md:bottom-8 right-2.5 md:right-10 fixed md:hover:w-40 transition-all animate-bounce';

export default function WhatsappButton() {

  const [opacity, setOpacity] = useState(0);

  // const changeHidden = () => {
  //   const value = opacity ? 0 : 100;
  //   setOpacity(value);
  // };
  
  return (
    <>
      <PopUpWhatsapp hidden={opacity} setOpacity={setOpacity}/>
      {/* <a href='https://wa.me/5511996887972?text=Olá,%20vim%20aqui%20através%20do%20seu%20site!' target='blank'>
        <img src={whatsappButton} alt='Botão de contato para WhatsApp' className={button} />
      </a> */}
      <button onClick={() => setOpacity(100)}>
        <img src={whatsappButton} alt='Botão de contato para WhatsApp' className={button} />
      </button>
    </>
  )
}
