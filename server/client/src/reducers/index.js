import { combineReducers } from 'redux';
import addEquationReducer from './addEquationReducer'
import recentList from './recentListReducer'

const rootReducer = combineReducers({
    equations:addEquationReducer,
    recentList: recentList,

});

export default rootReducer;