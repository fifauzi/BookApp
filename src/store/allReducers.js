import {combineReducers} from 'redux';
import HomeReducer from '../screens/home/redux/reducer';
import LoginReducer from '../screens/login/redux/reducer';
import RegisterReducer from '../screens/register/redux/reducer';
import BookDetailReducer from '../screens/bookDetail/redux/reducer';
import {reducerGlobal} from './reducerGlobal';

export const allReducers = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  home: HomeReducer,
  bookdetail: BookDetailReducer,
  global: reducerGlobal,
});
