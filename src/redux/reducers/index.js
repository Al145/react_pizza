import { combineReducers } from 'redux';
import filters from './filtersReduce';
import pizzas from './pizzasReduce';
import cart from './cartReduce';


const rootReducer = combineReducers({filters, pizzas, cart});

export default rootReducer;