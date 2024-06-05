import React, { useState } from 'react'
import styled from 'styled-components'

const Rolldice = ({rollDice,currentDice}) => {


  return (
    <DiceConatiner>
    <div className='dice' onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice 1"/>
    </div>
    <p>Click on dice to roll</p>
    </DiceConatiner>
  )
}

export default Rolldice

const DiceConatiner = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center; // center me laane ke liye dice ko
    .p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
    }

`