import './App.css';
import imagePerfil from './images/thaysEline_perfil.jpg';
import SocialMidiaIcons from './components/SocialMidiaIcons';
import ButtonDownloadCv from './components/ButtonDownloadCv';
import SendEmail from './components/SendEmail';
// import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagePerfil} className="App-logo" alt="Thays Eline" />
        <p className='m-4'>
          Personal <b>Thays Eline</b>
        </p>
        <p className='mx-5'>
        Profissional de Educação Física, especializada em aulas coletivas e exercícios físicos na gravidez e pós-parto.
        </p>
        <p className='mt-4'>CREF: 169177G/SP</p>
        <ButtonDownloadCv />
        {/* <Contacts /> */}
        <SocialMidiaIcons />
        <SendEmail />
      </header>
    </div>
  );
}

export default App;
