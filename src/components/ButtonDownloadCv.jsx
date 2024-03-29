import React from 'react'

export default function ButtonDownloadCv() {
  return (
    <button className="m-10 bg-sky-500 hover:bg-sky-700 duration-300 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center animate-fade-in-down">
      <svg className="w-7 h-7 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <a href='https://drive.google.com/uc?export=download&id=1Fc91yT3fwLrWLjwN78ZQPE4fink9Yfx2' download>Download Currículo</a>
    </button>
  )
}
