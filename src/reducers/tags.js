import * as types from "./../constants/ActionTypes";
var initialState = [];

const random_tags = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RANDOM_TAGS:
      state = action.random_tags;     
      return [...state];
    default:
      return [...state];
  }
};

export default random_tags;
