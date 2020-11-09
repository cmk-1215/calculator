import { combineReducers } from 'redux';
import addEquationReducer from './addEquationReducer'

const rootReducer = combineReducers({
    equations:addEquationReducer,
});

export default rootReducer;