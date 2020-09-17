import React from 'react';
import './Calculator.css'
const keypad = (props)=> {
    return(
        <div className='Calculator'>
        <button name='clear' onClick={props.onClick}>clear</button>
        <button name='/' onClick={c=>props.onClick(c.target.name)}>/</button>
        <button name='7' onClick={c=>props.onClick(c.target.name)}>7</button>
        <button name='8' onClick={c=>props.onClick(c.target.name)}>8</button>
        <button name='9' onClick={c=>props.onClick(c.target.name)}>9</button>
        <button name='-' onClick={c=>props.onClick(c.target.name)}>-</button>
        <button name='4' onClick={c=>props.onClick(c.target.name)}>4</button>
        <button name='5' onClick={c=>props.onClick(c.target.name)}>5</button>
        <button name='6' onClick={c=>props.onClick(c.target.name)}>6</button>
        <button name='+'onClick={c=>props.onClick(c.target.name)}>+</button>
        <button name='1' onClick={c=>props.onClick(c.target.name)}>1</button>
        <button name='2' onClick={c=>props.onClick(c.target.name)}>2</button>
        <button name='3' onClick={c=>props.onClick(c.target.name)}>3</button>
        <button name='=' onClick={c=>props.onClick(c.target.name)}>=</button>
        </div>
        );

}
export default keypad;