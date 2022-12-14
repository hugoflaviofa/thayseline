import emailjs from '@emailjs/browser';
import validateEmail from '../helper/validateEmail';

export default async function sendEmail(name, email, message) {
  const templateParams = {
    to_name: 'Thays',
    from_name: name,
    email,
    message,
  };

  const isValid = validateEmail(email);

  if (!isValid) return alert('Por favor, digite um email válido.')

  // emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
  //   .then((result) => {
  //       if(result.text === 'OK') alert('Email enviado com sucesso!');
  //   }, (error) => {
  //       if(error) alert('Parece que algo deu errado. Por favor, tente novamente', `Erro: ${error.text}`);
  //   });
  try {
    const result = await emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY);

    if(result.text === 'OK') alert('Email enviado com sucesso!');

    return 'OK';
  } catch (error) {
    alert('Parece que algo deu errado. Por favor, tente novamente', `Erro: ${error.text}`);
  }
};