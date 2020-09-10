import React, { useState } from 'react';
function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const activate = () => {
        setActive(true)
    }
    const className = `card ${active ? 'activeCard' : ''}`
    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )

}
export default CharacterCard