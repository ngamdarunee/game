import React from 'react';
import CharacterCard from './CharacterCard';

const activationHandler = c => { console.log(`${c} has been activated.`) }

function WordCard(props) {
    return (
        <div>
            {Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i} 
            activationHandler={activationHandler}/>
)}
        </div>
    );
}

export default WordCard