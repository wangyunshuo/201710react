import * as types from './action-types';
let initState = {number:0};
export default function (state=initState,action){
  switch(action.type){
    case types.ADD:
      return {number:state.number+action.amount};
    case types.SUB:
      return {number:state.number-action.amount};
    default:
      return state;
  }
}