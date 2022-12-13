import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const div = 'mt-8 w-full max-w-xs text-left';
const p = 'block text-gray-50 text-center text-xl font-bold mb-2';
const forms = 'bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 mb-4';
const label = 'block text-gray-50 text-sm font-bold mb-2';
const input = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
const textarea = 'h-48 text-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
const submit = 'bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline';

export default function SendEmail() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={div}>
      <form className={forms} ref={form} onSubmit={sendEmail}>
        <p className={p}>Envie um Email</p>
        <div className="mb-4">
          <label className={label} for="username">
            Nome:
          </label>
          <input className={input} id="username" type="text" placeholder="Seu Nome" />
        </div>
        <div className="mb-4">
          <label className={label} for="email">
            Email:
          </label>
          <input className={input} type="email" id="email" placeholder="Seu Email" />
        </div>
        <div className="mb-4">
          <label className={label} id="textarea">
            Menssagem:
          </label>
          <textarea className={textarea} for="textarea" placeholder="Sua Menssagem" />
        </div>
        <div className="flex justify-center">
          <input className={submit} type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};
