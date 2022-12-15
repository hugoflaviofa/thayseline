import React, { useState } from 'react';
import sendEmail from '../service/emailJs';

// Tailwind CSS
const div = 'mt-8 w-10/12 md:w-6/12 text-left mb-5 animate-fade-in-down';
const p = 'block text-gray-50 text-center text-xl md:text-4xl font-bold mb-2';
const forms = 'bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 mb-4';
const label = 'block text-gray-50 text-sm md:text-3xl font-bold mb-2';
const input = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
const textarea = 'h-48 text-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
const submit = 'bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline';

export default function SendEmail() {
  
  const [formsName, setFormsName] = useState('');
  const [formsEmail, setFormsEmail] = useState('');
  const [formsMessage, setFormsMessage] = useState('');

  const sendFormsEmail = async (event, name, email, message) => {
    event.preventDefault();

    const response = await sendEmail(name, email, message)

    if(response === 'OK') {
      setFormsName('');
      setFormsEmail('');
      setFormsMessage('');
    };
  }

  return (
    <div className={div}>

      <form
        className={forms}
        onSubmit={(event) => sendFormsEmail(event, formsName, formsEmail, formsMessage)
      }>
        <p className={p}>
          Envie um Email
        </p>

        <div className="mb-4">
          <label className={label} htmlFor="username">
            Nome:
          </label>
          <input
            className={input}
            id="username"
            type="text"
            placeholder="Seu Nome"
            required
            value={formsName}
            onChange={({ target: { value } }) => setFormsName(value)}
          />
        </div>

        <div className="mb-4">
          <label className={label} htmlFor="email">
            Email:
          </label>
          <input
            className={input}
            type="email"
            id="email"
            placeholder="Seu Email"
            required
            value={formsEmail}
            onChange={({ target: { value } }) => setFormsEmail(value)} />
        </div>

        <div className="mb-4">
          <label className={label} id="textarea">
            Mensagem:
          </label>
          <textarea
            className={textarea}
            htmlFor="textarea"
            placeholder="Sua Mensagem"
            required
            value={formsMessage}
            onChange={({ target: { value } }) => setFormsMessage(value)} />
        </div>

        <div className="flex justify-center">
          <input
            className={submit}
            type="submit"
            value="Enviar"
          />
        </div>
      </form>
    </div>
  );
};
