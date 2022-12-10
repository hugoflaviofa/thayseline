import React from 'react'
import mail from '../images/icons/email_icon.svg'
import whatsapp from '../images/icons/teste.png'

export default function Contacts() {
  return (
    <div className='flex flex-col content-center'>
      <div className='flex'>
        <img className='w-12' src={mail} alt='Whatsapp'/>
        <p className='p-4 text-center'><b>thays_eline@hotmail.com</b></p>
      </div>
      <div className='flex'>
        <img className='w-12 h-12' src={whatsapp} alt='Whatsapp'/>
        <p className='p-4 text-center'><b>(11) 99688-7972</b></p>
      </div>
    </div>
  )
}
