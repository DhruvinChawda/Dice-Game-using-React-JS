import React from 'react'
import Totalscore from './Totalscore'
import Numberselector from './Numberselector'
import styled from 'styled-components'
import Rolldice from './Rolldice'
import Rules from './Rules'
import { Button, OutlineButton } from '../styled/Button'
import { useState } from 'react'

const Gameplay = () => {
  const[score,setScore] = useState(0);

  const [selectedNumber, setSelectedNumber] = useState();

  const[currentDice, setCurrentDice] = useState(1);

  const[error, setError] = useState("");
  
  const[showRules,setShowRules] = useState(false)

  const generateRandomNumber = (min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
  };

  const rollDice = ()=>{
    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }  //isse agr number select nahi kiya to value update nahi hoga na dice ka na score ka
    
    const randomNumber = generateRandomNumber(1,7);

    setCurrentDice((prev)=>randomNumber);

    if(selectedNumber==randomNumber){
      setScore(prev=>prev + randomNumber);
    }else{
      setScore(prev=>prev-2);
    }

    setSelectedNumber(undefined); // yeh line isse number unselect ho jata black ka white ho jata button 
  };

  const resetScore=()=>{
    setScore(0);
  };

  return (
    <MainContainer>
     <div className="topsection">
     <Totalscore score={score}/>
     <Numberselector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
     />
     </div>

     <Rolldice currentDice={currentDice} rollDice={rollDice}/>

     <div className="btns">
      <OutlineButton onClick={resetScore}>Reset</OutlineButton>
      <Button onClick={()=>setShowRules(prev=>!prev)}>
        {showRules ? "Hide" : "Show"} Rules
      </Button>
     </div>

     {showRules && <Rules/>}
    </MainContainer>
  )
}

export default Gameplay

const MainContainer = styled.div`
padding-top: 70px;
.topsection{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btns{
  gap: 10px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px
}
`