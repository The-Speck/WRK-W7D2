import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const initialState = [];

export const errorReducer = (state = initialState, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
    console.log('ERRORS BELOW');
    console.log(action.errors);
      let nextState = merge([], state, action.errors);
      // action.errors.forEach( error => {
      //   nextState.push()
      // })
      return nextState;

    case CLEAR_ERRORS:
      return initialState;

    default:
      return state;
  }
};
