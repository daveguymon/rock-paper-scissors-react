import React from 'react';

export default function Options (props) {
    return (
      <div>
        <h2>Click One</h2>
        <img src="./../../images/rock.jpg" alt="rock" onClick={()=>props.selection("rock", props.compThrow())}/>
        <img src="./../../images/paper.jpg" alt="paper" onClick={()=>props.selection("paper", props.compThrow())}/>
        <img src="./../../images/scissors.jpg" alt="scissors" onClick={()=>props.selection("scissors", props.compThrow())}/>
      </div>
    )
}
