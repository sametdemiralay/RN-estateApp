import React, {useEffect} from 'react';
import {View, Text, StatusBar, FlatList} from 'react-native';
import Header from '../components/Header';
import InputRegion from '../components/InputRegion';
import ListItem from '../components/ListItem';
import {styles} from '../styles/listingStyle'

import {useSelector, useDispatch} from 'react-redux';
import allActions from '../redux/actions/index';

const ListingsScreen = () => {
  const infoList = useSelector(state => state.infoList);
  const dispatch = useDispatch();
  const getInfo = () => dispatch(allActions.informationActions.getInfo());

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.headerSection}>
        <Header title="Listings" />
      </View>

      <View style={styles.inputSection}>
        <InputRegion />
      </View>

      <View style={styles.flatlistSection}>
        <FlatList
          data={infoList}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ListItem item={item} />}
        />
      </View>
    </View>
  );
};

export default ListingsScreen;
