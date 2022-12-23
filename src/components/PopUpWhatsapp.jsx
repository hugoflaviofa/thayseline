import React, { useState } from 'react'
import whatsappButton from '../images/icons/whatsapp_icon.svg'

// const popUp = 'absolute bg-rose-600 p-16 flex';

export default function PopUpWhatsapp(props) {

  const [name, setName] = useState('');

  return (
    <div
      className={`fixed bottom-1/3 bg-gray-600 p-8 rounded-lg ${props.hidden} shadow-2xl duration-500`}
    >
      <button
        type="button"
        className="absolute -top-5 right-0 w-10 self-end bg-white rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={() => props.setOpacity('hidden')}
      >
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <p
        className='text-left'
      >
        Como gostaria de ser chamado?
      </p>
      <input
        className='text-black rounded-sm h-10 pl-3 shadow-2xl'
        placeholder='Digite seu nome'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <a href={
        name
        ? `https://wa.me/5511996887972?text=Olá,%20me%20chamo%20${name}.%20Gostaria%20de%20saber%20mais%20sobre%20treino%20personalizado.`
        : 'https://wa.me/5511996887972?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20treino%20personalizado.'
      } target='blank'>
        <div className='flex w-44 md:w-64 bg-green-500 m-auto rounded-lg mt-6 shadow-2xl'>
          <img className='w-14' alt="Chat para o WhatsApp!" src={whatsappButton} />
          <p className='w-60 pr-4 m-auto'>Inicie o Chat</p>
        </div>
      </a>
    </div>
  )
}
