import {applyMiddleware, createStore} from 'redux';
import {allReducers} from './allReducers';

// middleware
import thunk from 'redux-thunk';

// storage
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
  key: 'persist',
  storage: AsyncStorage,
  whiteList: ['login', 'home', 'bookdetail'],
};

const allMiddlewares = applyMiddleware(thunk);

const persistedReducer = persistReducer(config, allReducers);

export const store = createStore(persistedReducer, {}, allMiddlewares);

export const persistedStore = persistStore(store);
