import {combineReducers} from 'redux';
import informationReducer from './informationReducer';

const rootReducer = combineReducers({
  infoList: informationReducer,
});

export default rootReducer;
