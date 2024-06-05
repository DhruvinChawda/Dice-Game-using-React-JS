import React from 'react'
import styled from "styled-components"
import { Button } from '../styled/Button'

const Startgame = ({toggle}) => {
    return (
        <div><Container>
            <div>
            <img src="/images/dices 1.png" />
            </div>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container></div>
    )
}

export default Startgame

const Container = styled.div`
max-width: 1180px;
display: flex;
height: 100vh;
margin: 0 auto;
align-items: center;
.content{
    h1{
        font-size: 96px;
        white-space: nowrap; //css property for dice aur game ko baju baju laane ke liye
    }
}
`;

