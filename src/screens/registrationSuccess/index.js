import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const Index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Completed!</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/success.png')}
      />
      <Text style={styles.subtitle}>
        We sent email verification to your email
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAE3D9',
    height: moderateScale(800),
  },
  image: {
    height: moderateScale(200),
    width: moderateScale(200),
    top: moderateScale(200),
    left: moderateScale(70),
  },
  title: {
    fontWeight: 'bold',
    fontSize: moderateScale(24),
    color: 'black',
    left: moderateScale(40),
    top: moderateScale(100),
  },
  subtitle: {
    fontWeight: '800',
    fontSize: moderateScale(20),
    top: moderateScale(250),
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4D96FF',
    width: moderateScale(260),
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    top: moderateScale(350),
    left: moderateScale(45),
  },
  buttonText: {
    color: 'white',
  },
});
