import { DECREMENT_COUNTER, INCREMENT_COUNTER, SET_COUNTER } from '../constants';

const counter = (state = 0, action: any) => {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload;
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
