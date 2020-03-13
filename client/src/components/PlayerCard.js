import React from 'react';

const PlayerCard = (props) => {
    const player = props.player;
    return (
        <div key={player.id} className='playerCard'>
            <h2 className='name'>{player.name}</h2>
            <p>{player.country}</p>
            <p>Searches: {player.searches}</p>
        </div>
    )
}

export default PlayerCard;