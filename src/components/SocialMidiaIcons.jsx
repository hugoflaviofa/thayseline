import React from 'react';
import instagram from '../images/icons/instagram_icon.svg'
import facebook from '../images/icons/facebook_icon.svg'
import linkedin from '../images/icons/linkedin_icon.svg'
import tiktok from '../images/icons/tiktok_icon.svg'
// import whatsappIcon from '../images/icons/whatsapp_icon.svg'

export default function SocialMidiaIcons() {
  return (
    <div className='w-11/12 md:w-2/5 flex justify-evenly animate-fade-in-down p-1'>

      <a
        href="https://www.instagram.com/thays_eline/"
        target="blank"
      >
        <img
          className='p-3 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull bg-slate-900 w-14 md:w-24 transform hover:-translate-y-3 rounded-full duration-500'
          src={instagram}
          alt='Instagram'
        />
      </a>
      <a
        href="https://pt-br.facebook.com/personalthayseline/"
        target="blank"
      >
        <img
          className='p-3 bg-slate-900 sticky duration-500 fixed w-14 md:w-24 transform hover:-translate-y-3 text-2xl hover:bg-blue-600 rounded-full'
          src={facebook}
          alt='Facebook'
        />
      </a>
      <a
        href="https://www.tiktok.com/@thays_eline"
        target="blank"
        >
        <img
          className='p-3 bg-slate-900 transform hover:-translate-y-3 w-14 md:w-24 rounded-full duration-500 text-black border-black hover:bg-black hover:text-white text-2xl'
          src={tiktok}
          alt='Tiktok'
          />
      </a>
      <a
        href="https://www.linkedin.com/in/thayseline/"
        target="blank"
      >
        <img
          className='p-3 bg-slate-900 transform hover:-translate-y-3 w-14 md:w-24 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl'
          src={linkedin}
          alt='Linkedin'
        />
      </a>
      {/* <a
        href='https://wa.me/5511996887972?text=Olá,%20vim%20aqui%20através%20do%20seu%20site!'
        target='blank'>
        <img
          className='p-3 bg-slate-900 duration-500 w-14 md:w-24 rounded-full transform hover:-translate-y-3 hover:bg-green-600'
          src={whatsappIcon}
          alt='Whatsapp'
        />
      </a> */}
    </div>
  )
}
