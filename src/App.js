import './App.css';
import SocialMidiaIcons from './components/SocialMidiaIcons';
import ButtonDownloadCv from './components/ButtonDownloadCv';
import Forms from './components/Forms';
import WhatsappButton from './components/WhatsappButton';
import NavBar from './components/NavBar';
import TrackFiedl from './components/TrackFiedl';
import Perfil from './components/Perfil';
import Footer from './components/Footer';
// import PopUpWhatsapp from './components/PopUpWhatsapp';
// import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Perfil />
        <ButtonDownloadCv />
        {/* <Contacts /> */}
        <SocialMidiaIcons />
        <Forms />
        <WhatsappButton />
        {/* <PopUpWhatsapp /> */}
        <TrackFiedl />
        <Footer />
      </header>
    </div>
  );
}

export default App;
