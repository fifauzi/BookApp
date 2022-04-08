import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './index';
import {navigationRef} from '../helpers/navigate';

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Router />
    </NavigationContainer>
  );
};

export default Root;
