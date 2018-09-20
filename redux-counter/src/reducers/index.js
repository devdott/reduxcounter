//리듀서는 액션의 type에 따라 변화를 일으키는 함수이다.
//그래서 ActionTypes.js 에서 객체로 type값을 지정하였다.

//액션에서 타입을 불러와서 쓴다
import * as types from '../actions/ActionTypes';

//리듀서 자체 초기 상태의 값
const initialState = {
    color : 'black',
    number : 0
};

