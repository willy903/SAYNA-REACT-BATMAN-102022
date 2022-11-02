import React from 'react';
import '../styles/game.css';
import flechedown from '../assets/logos/flèche_down_header.png';
import AsideRight from '../components/AsideRight';
import GameQuestion1 from '../components/GameComponents/GameQuestion1';
function Game() {
  return (
    <div className='bg_ajust'>
    <AsideRight/>
      <div className="play_presentation">
        <h1 className="title_batman">LET’S PLAY A <br/> LiTTLE GAME...</h1>
        <div className="container_flecheDown">
            <img src={flechedown} alt="flèche vers le bas"/>
        </div>
    </div>
    <GameQuestion1></GameQuestion1>
    <div className='text-center'>
            <button className="quiz_btn">DÉMARRER LE QUIZ</button>
    </div>
    </div>
    
  )
}

export default Game