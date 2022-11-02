import React from 'react';
import '../../styles/game.css';
import bathome2 from '../../assets/Game/Batgame_2.png';
function GameQuestion1() {
  return (
    <>
    <div className="Quizz">
        <div className="G0">
            <h1>connaissez vous bien le chevalier noir ?</h1>
            <div className="img_game">
                <img src={bathome2} alt="" width="100%" height="auto"/>
            </div>
        </div>
        <div className="questions">            
        </div>
    </div>
    </>
  )
}

export default GameQuestion1