import React from "react";
import imagePerfil from "../images/thaysEline_perfil.webp";

export default function Perfil() {
  return (
    <div id="perfil" className="flex flex-col items-center">
      <img
        src={imagePerfil}
        className="mt-20 w-56 md:w-80 rounded-full"
        alt="Thays Eline"
      />
      <p className="m-4 animate-fade-in-down">
        Personal <b>Thays Eline</b>
      </p>
      <p className="mt-4 text-slate-300 mx-5 animate-fade-in-down">
        Formada Em Educação Física
      </p>
      <p className="text-slate-300 mx-5 animate-fade-in-down">
        Pós-graduanda em Treinamento Feminino e Reabilitação de Lesões
      </p>
      <p className="text-slate-300 mx-5 animate-fade-in-down">
        Trainer parceira da Track&Field
      </p>
      <p className="mt-4 animate-fade-in-down">CREF: 169177G/SP</p>
    </div>
  );
}
