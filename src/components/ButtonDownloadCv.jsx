import React from 'react'

export default function ButtonDownloadCv() {
  return (
    <button className="m-10 bg-sky-500 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
      <svg className="w-7 h-7 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <a href='https://drive.google.com/uc?export=download&id=1Rb5dZajvEq2EFstTNdrQU3u5sqNH2Ioc' download>Download Currículo</a>
    </button>
  )
}
