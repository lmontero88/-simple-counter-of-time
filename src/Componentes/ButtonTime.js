import React from 'react'

function ButtonTime(props) {
    return (
        <div>
            <button className="botones" onClick={props.funcion}>{props.value}</button>
        </div>
    )
}

export default ButtonTime

