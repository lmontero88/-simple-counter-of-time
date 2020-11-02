import React from 'react'
import Digitos from './Digitos'
import ButtonTime from './ButtonTime'



function Main(props) {
    return (
        <div className= "class-container">
            <Digitos name={props.reloj}/>
            <Digitos name={props.h1}/>
            <Digitos name={props.h2}/>
            <Digitos name={props.m1}/>
            <Digitos name={props.m2}/>
            <Digitos name={props.s1}/>
            <Digitos name={props.s2}/>
            <div className = "box-botones">
            <ButtonTime value ='Start' funcion ={props.Start}/>
            <ButtonTime value ='Stop' funcion ={props.Stop}/>
            <ButtonTime value ='Reset' funcion ={props.Reset}/>
            </div>
        </div>
    )
}

export default Main
