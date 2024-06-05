import { useState } from 'react'
import Startgame from './components/Startgame'
import Gameplay from './components/Gameplay';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import styled from "styled-components"




function App() {
  
  const [isGameStarted,setIsGameStared] = useState(false);

  const toggleGamePlay=()=>{
    setIsGameStared((prev)=>!prev);
  };

  return (
    <>
    {
      isGameStarted ? <Gameplay/> : <Startgame toggle={toggleGamePlay}/>
    }
    </>
  )
}

export default App




