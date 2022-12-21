import React from 'react'
import logo from '../images/icons/logo.svg'
import trackAndFild from '../images/icons/T&F.svg'

export default function NavBar() {
  return (
    <div className='bg-slate-700 w-full h-14 flex justify-between'>
      <img className='w-12 ml-2' src={logo} alt='Logo Thays' />
      <img className='w-36' src={trackAndFild} alt='Logo T&F' />
      <div class="space-y-3 mr-2 flex flex-col justify-center">
        <div class="w-12 h-1.5 bg-black rounded-lg"></div>
        <div class="w-12 h-1.5 bg-black rounded-lg"></div>
        <div class="w-12 h-1.5 bg-black rounded-lg"></div>
      </div>
    </div>
  )
}
