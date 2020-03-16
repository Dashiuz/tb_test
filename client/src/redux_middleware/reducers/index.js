import { ADD_STRING } from "../constants/action-types";

const initialState = {
  stringChain: []
};

function rootReducer(state = initialState, action) {
  console.log("REDUCER: " + JSON.stringify({ state: state, action: action }))
  if (action.type === ADD_STRING) {
    return Object.assign({}, state, {
      stringChain: state.stringChain.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;