import types from "../actions/types";

const DEFAULT_STATE = {
  color: "green",
  currentTime: new Date().toLocaleTimeString(),
  date: new Date().toLocaleDateString()
};

function generateRandomColor() {
  return `rgb(${randomRGBNumber()}, ${randomRGBNumber()}, ${randomRGBNumber()})`
}

function randomRGBNumber() {
  return Math.floor(Math.random() * 256);
}

function clockReducer(state = DEFAULT_STATE, action) {
  // console.log("Action:", action);
  //in case state is null, give it a default value
  switch(action.type) {
    case types.UPDATE_TIME:
      return {...state, currentTime: new Date().toLocaleTimeString(), color: generateRandomColor()};
    case types.INCREASE_DATE:
      return {...state, date: new Date(new Date(state.date).getTime() + action.payload).toLocaleDateString()}
    default:
      return state;
  }
}

export default clockReducer;
