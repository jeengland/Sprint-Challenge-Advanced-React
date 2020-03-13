import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = (props) => {
    const data = props.data;
    return (
       <div className='container'>
           {data.map((player) => {
               return (
                   <PlayerCard player={player} />
               )
           })}
       </div> 
    )
}

export default PlayerList;