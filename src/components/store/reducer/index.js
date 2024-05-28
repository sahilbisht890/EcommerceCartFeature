import { combineReducers } from 'redux';
import reducerCart from './cart'
import { dataReducer } from './dataFetch';

const rootReducer = combineReducers({
  cart: reducerCart,
  data:dataReducer
});

export default rootReducer;
