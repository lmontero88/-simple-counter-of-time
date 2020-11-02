import React from 'react'

function Digitos(props) {
    let digit = props.name;
    if(digit === 10){
        digit = '🕒'
    }
    return (
        <div className = "box-digitos">
            <span>{digit}</span>            
        </div>
    )
}

export default Digitos
