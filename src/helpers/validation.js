/* eslint-disable no-unused-vars */
import NetInfo from '@react-native-community/netinfo';
import 'intl';
import 'intl/locale-data/jsonp/en';

const emailValidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const checkEmail = email => {
  if (email) {
    if (emailValidate.test(email)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const hurufBesar = /[A-Z]/;
const hurufKecil = /[a-z]/;
const angka = /[0-9]/;

export const isValidPassword = givenPassword => {
  if (typeof givenPassword === 'string') {
    if (givenPassword.length < 8) {
      return false; //+ ", karena jumlah password kurang, yaitu hanya " + givenPassword.length
    } else if (!hurufBesar.test(givenPassword)) {
      return false; //+ ", karena tidak ada huruf besar"
    } else if (!hurufKecil.test(givenPassword)) {
      return false; //+ ", karena tidak ada huruf kecil"
    } else if (!angka.test(givenPassword)) {
      return false; //+ ", karena tidak ada angka"
    } else {
      return true;
    }
  } else {
    return false; //"ERROR: Invalid Type Data!"
  }
};
