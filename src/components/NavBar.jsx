import React from 'react'
import logo from '../images/icons/logo.svg'
import trackAndFild from '../images/icons/T&F.svg'

export default function NavBar() {
  return (
    <div className='bg-slate-700 w-full h-14 flex justify-between items-center fixed top-0 z-50'>
      <a href='#perfil'>
        <img className='w-12 ml-2' src={logo} alt='Logo Thays' />
      </a>
      <a className='flex items-center justify-center rounded-2xl h-3/5 w-3/6 md:w-2/12 hover:bg-sky-900 transform duration-500' href='#t-and-f'>
        <img className='w-36' src={trackAndFild} alt='Logo T&F' />
      </a>
      <div className="space-y-2 mr-2 flex flex-col justify-center">
        <div className="w-12 h-1.5 bg-black rounded-lg"></div>
        <div className="w-12 h-1.5 bg-black rounded-lg"></div>
        <div className="w-12 h-1.5 bg-black rounded-lg"></div>
      </div>
    </div>
  )
}
