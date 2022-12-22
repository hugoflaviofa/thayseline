import React from 'react'
import whatsappButton from '../images/icons/whatsapp_icon.svg'

const popUp = 'absolute bg-rose-600 p-16 flex';

export default function PopUpWhatsapp() {
  return (
    <div
      className='fixed bottom-1/3 bg-gray-600 p-8 rounded-lg flex flex-col gap-y-2 shadow-2xl'
    >
      <p
        className='text-left'
      >Qual o seu Nome?</p>
      <input
      className='rounded-sm h-10 pl-3 shadow-2xl'
        placeholder='Digite seu nome'
      />
      <a href="https://wa.me/1XXXXXXXXXX">
        <div className='flex w-44 bg-green-500 m-auto rounded-lg mt-6 shadow-2xl'>
          <img className='w-14' alt="Chat para o WhatsApp!" src={whatsappButton} />
          <p className='w-60 pr-4 m-auto'>Inicie o Chat</p>
        </div>
      </a>
    </div>
  )
}
