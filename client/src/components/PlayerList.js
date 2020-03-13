import React from 'react';

import PlayerCard from './PlayerCard';

import useDarkMode from '../hooks/useDarkMode';

const PlayerList = (props) => {
    const data = props.data;
    const [darkMode, setDarkMode] = useDarkMode(false);
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
       <div className='container'>
           <button onClick={handleDarkMode}>Dark Mode</button>
           {data.map((player) => {
               return (
                   <PlayerCard player={player} />
               )
           })}
       </div> 
    )
}

export default PlayerList;