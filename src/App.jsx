import './App.css';
import './Assets/Style/style.css'
import Header from './Components/Header';
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

    </div>
  );
}

export default App;
