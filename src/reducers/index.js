import { combineReducers } from 'redux';
import { SET_NAME, SET_EMAIL } from '../actions';

const initialState = {
  name: '',
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
