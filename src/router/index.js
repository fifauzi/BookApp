/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/register/index';
import Login from '../screens/login/index';
import Home from '../screens/home/index';
import RegistrationSuccess from '../screens/registrationSuccess/index';
import BookDetail from '../screens/bookDetail/index';
import NetInfo from '@react-native-community/netinfo';
import {checkConnection} from '../store/actionGlobal';
import {useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    isConnecteds();
  }, []);

  const isConnecteds = () =>
    NetInfo.fetch()
      .then(state => {
        dispatch(checkConnection(state.isConnected));
      })
      .catch(error => {
        console.log(error);
      });

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="RegistrationSuccess"
        component={RegistrationSuccess}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="BookDetail" component={BookDetail} />
    </Stack.Navigator>
  );
};

export default Index;
