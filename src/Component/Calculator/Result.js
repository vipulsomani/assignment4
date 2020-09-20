import React from 'react';
import './Calculator.css';
const result = (props)=> {
    return(
        <div className= 'result'>
            <p>{props.result}</p>
        </div>

    );

}
export default result;