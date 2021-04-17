  
import { useState } from 'react'
import { AppConteiner } from './styledApp'
import HomeScreen from './components/HomeScreen';
import MatchScreen from './components/MatchScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState(true)

  const changeScreen = () => {
    setCurrentScreen(!currentScreen)
  }

  return (
    <AppConteiner>
      {currentScreen ? <HomeScreen changeScreen={changeScreen} />
      : <MatchScreen changeScreen={changeScreen} />}       
    </AppConteiner>
  );
}
export default App;
