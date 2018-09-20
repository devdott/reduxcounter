import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css'

//Props 를 받아서 보여줄 컴포넌트 /실제 사용 컴포넌트
const Counter = ( {number, color, onIncrement, onDecrement, onSetColor} ) =>{
    return (
        <div className="Counter" onClick={onIncrement} onContextMenu={(e)=>{e.preventDefault(); onDecrement();}} onDoubleClick={onSetColor} style={{backgroundColor : color}}>
            {number}
        </div>
    )
};
//변수의 형식타입
Counter.propTypes = {
    number : PropTypes.number,
    color : PropTypes.string,
    onIncrement : PropTypes.func,
    onDecrement : PropTypes.func,
    onSetColor : PropTypes.func
}

Counter.defaultProps ={
    number : 0,
    color : 'black',
    onIncrement : () =>{console.warn('onIncrement')},
    onDecrement : () =>{console.warn('onDecreament')},
    onSetColor : () =>{console.warn('SetColor not defined')},
}

export default Counter;
