import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const div = 'mt-8 w-full max-w-xs text-left';
const p = 'block text-gray-50 text-center text-xl font-bold mb-2';
const forms = 'bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 mb-4';
const label = 'block text-gray-50 text-sm font-bold mb-2';
const input = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
const textarea = 'h-48 text-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
const submit = 'bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline';

export default function SendEmail() {
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return String(email)
      .toLowerCase()
      .match(regex);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Thays',
      from_name: name,
      email,
      message,
    };

    const isValid = validateEmail(email);

    if (!isValid) return alert('Por favor, digite um email válido.')

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          if(result.text === 'OK') alert('Email enviado com sucesso!');
      }, (error) => {
          if(error) alert('Parece que algo deu errado. Por favor, tente novamente', `Erro: ${error.text}`);
      });
  };

  return (
    <div className={div}>
      <form className={forms} onSubmit={sendEmail}>
        <p className={p}>Me envie um Email</p>
        <div className="mb-4">
          <label className={label} htmlFor="username">
            Nome:
          </label>
          <input className={input} id="username" type="text" placeholder="Seu Nome" required onChange={({ target: { value } }) => setName(value)} />
        </div>
        <div className="mb-4">
          <label className={label} htmlFor="email">
            Email:
          </label>
          <input className={input} type="email" id="email" placeholder="Seu Email" required onChange={({ target: { value } }) => setEmail(value)} />
        </div>
        <div className="mb-4">
          <label className={label} id="textarea">
            Menssagem:
          </label>
          <textarea className={textarea} htmlFor="textarea" placeholder="Sua Menssagem" required onChange={({ target: { value } }) => setMessage(value)} />
        </div>
        <div className="flex justify-center">
          <input className={submit} type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};
