import React from "react";
import trackFiedl from "../images/SouUmTrainner_Thays_Silva.webp";

export default function TrackFiedl() {
  return (
    <div id="t-and-f" className="mb-10 flex flex-col items-center gap-6">
      <img
        id="teste"
        className="w-5/6 md:w-3/6 rounded-xl"
        src={trackFiedl}
        alt="Foto Tracke & Field"
      />
      <button>
        <a
          className="bg-sky-600 hover:bg-sky-700 duration-300 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          href="https://www.tf.com.br/?targeting=thays-s"
          target="blank"
        >
          Compre com meu link
        </a>
      </button>
    </div>
  );
}
