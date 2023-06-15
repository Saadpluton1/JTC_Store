import './App.css';
import './Assets/Style/style.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import coffee from '../src/Assets/Images/coffee.png'
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import LandingPage from './Pages/LandingPage';
import SocialIcons from './Components/SocialIcons';
function App() {
  return (
    <div className="App">

      <Header />
      <SocialIcons />
      <LandingPage />
      <Footer />

    </div>
  );
}

export default App;
