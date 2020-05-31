import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Feather';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ImageSection = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const infoList = useSelector(state => state.infoList);
  const [veri, setVeri] = React.useState('https://tinyurl.com/yczksqyn');

  const specialID = () => {
    const al = infoList.filter(val => route.params.id === val.id);
    const be = al.map(val => val.image);
    const yaa = be[0];
    setVeri(yaa);
  };

  React.useEffect(() => {
    specialID();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: veri}} style={styles.image}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('Listings')}>
          <Ionicons name="arrow-left-circle" size={30} color={'#000'} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default ImageSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  iconContainer: {
    width: 40,
    height: 40,
    marginTop: 30,
    marginLeft: 10,
  },
});
