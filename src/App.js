import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import Router from './router/main';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistedStore, store} from './store/index';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
