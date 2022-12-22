import React from 'react'
import imagePerfil from '../images/thaysEline_perfil.jpg';

export default function Perfil() {
  return (
    <div className='flex flex-col items-center'>
        <img src={imagePerfil} className='mt-20 w-56 md:w-80 rounded-full' alt="Thays Eline" />
        <p className='m-4 animate-fade-in-down'>
          Personal <b>Thays Eline</b>
        </p>
        <p className='mx-5 animate-fade-in-down'>
          Profissional de Educação Física, especializada em aulas coletivas e exercícios físicos na gravidez e pós-parto.
        </p>
        <p className='mt-4 animate-fade-in-down'>CREF: 169177G/SP</p>
    </div>
  )
}
