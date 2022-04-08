import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const NoInternetConnection = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.name}>
        No Internet Connection, Check your internet
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoInternetConnection;

const styles = StyleSheet.create({
  name: {
    fontSize: moderateScale(24),
    textAlign: 'center',
    marginTop: moderateScale(250),
  },
  button: {
    backgroundColor: '#4D96FF',
    width: moderateScale(260),
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(40),
    marginTop: moderateScale(300),
  },
  buttonText: {
    color: 'white',
  },
});
