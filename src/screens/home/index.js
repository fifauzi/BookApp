/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {moderateScale} from 'react-native-size-matters';
import axios from 'axios';
import {SetRecommendeds} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {SetRefreshing, SetLoading} from '../../store/actionGlobal';
import NoInternetConnection from '../../component/NoInternetConnection';
import {BOOK_URL} from '../../helpers/apiAccessToken';

const Index = ({navigation}) => {
  const {recommendeds} = useSelector(state => state.home);
  const {refreshing, loading, connection} = useSelector(state => state.global);
  const {token} = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    recommended();
  }, []);

  const recommended = async () => {
    try {
      dispatch(SetLoading(true));
      const res = await axios.get(`${BOOK_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }, //${token}
      });
      console.log(res);

      dispatch(SetRefreshing(true));
      dispatch(SetRecommendeds(res.data.results));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(SetRefreshing(false));
      dispatch(SetLoading(false));
    }
  };

  if (connection) {
    if (loading) {
      return (
        <View style={[styles.loadingContainer, styles.loadingHorizontal]}>
          <ActivityIndicator size="large" color="#0275d8" />
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.greeting}>Have a Great Day, Rafi!</Text>
          <Text style={styles.recommended}>Recommended</Text>
          <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} />}
            keyExtractor={item => item.id}
            data={recommendeds}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BookDetail', {datas: item.id})
                }>
                <View style={styles.horizontalContainer}>
                  <FastImage
                    style={styles.image}
                    source={{uri: item.cover_image}}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </View>
              </TouchableOpacity>
            )}
            horizontal={true}
          />
          <Text style={styles.popular}>Popular Book</Text>
          <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} />}
            keyExtractor={item => item.id}
            numColumns={3}
            data={recommendeds}
            horizontal={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BookDetail', {datas: item.id})
                }>
                <View style={styles.verticalContainer}>
                  <FastImage
                    style={styles.image2}
                    source={{uri: item.cover_image}}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                  <Text style={styles.text}>Title : {item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
  } else {
    return <NoInternetConnection />;
  }
};

export default Index;

const styles = StyleSheet.create({
  greeting: {
    fontSize: moderateScale(16),
    top: moderateScale(40),
    left: moderateScale(20),
    fontWeight: 'bold',
    color: 'black',
  },
  recommended: {
    fontSize: moderateScale(14),
    top: moderateScale(60),
    left: moderateScale(20),
    color: 'black',
  },
  popular: {
    fontSize: moderateScale(14),
    left: moderateScale(20),
    marginTop: moderateScale(20),
    marginBottom: moderateScale(25),
    color: 'black',
  },

  image: {
    width: moderateScale(90),
    height: moderateScale(110),
    left: moderateScale(-10),
    top: moderateScale(-5),
  },
  horizontalContainer: {
    marginTop: moderateScale(80),
    marginLeft: moderateScale(10),
    left: moderateScale(20),
    // backgroundColor: 'black',
    height: moderateScale(170),
    width: moderateScale(90),
  },
  verticalContainer: {
    width: moderateScale(100),
    height: moderateScale(220),
    // top: moderateScale(-40),
    left: moderateScale(10),
    marginLeft: moderateScale(10),
    marginBottom: moderateScale(20),
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  loadingHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    top: moderateScale(20),
    color: 'black',
  },
  image2: {
    width: moderateScale(120),
    height: moderateScale(120),
    top: moderateScale(10),
    right: moderateScale(10),
  },
});
