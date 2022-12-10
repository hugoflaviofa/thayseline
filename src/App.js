import './App.css';
import imagePerfil from './images/thaysEline_perfil.jpg';
import SocialMidiaIcons from './components/SocialMidiaIcons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagePerfil} className="App-logo" alt="Thays Eline" />
        <p>
          Personal <b>Thays Eline</b>
        </p>
        <a href='./assets/Cv-Thays-Eline.pdf' download>Download Currículo</a>
        <SocialMidiaIcons />
      </header>
    </div>
  );
}

export default App;
