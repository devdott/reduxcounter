//액션 생성 함수 선언

// () => ({}) 과 function(){ return { }} 동일하다.
/// * as / export 된 전부 불러온다
import * as types from './ActionTypes';

//더하는 수치를 만들어서 액션한다.
export const increment = () =>({
  type : types.INCREMENT 
});
export const decrement = () =>({
  type : types.DECREMENT 
});
export const setColor = (color) => ({
    type : types.SET_COLOR, 
    color
    //color : color 키와 값이 같을때 줄여쓸수있다. ES6
});

