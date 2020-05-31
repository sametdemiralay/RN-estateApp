import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Header from '../components/Header';

const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      <View style={{flex: 1}}>
        <Header title="Map" />
      </View>

      <View style={{flex: 9, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Map Screen</Text>
      </View>
    </View>
  );
};

export default MapScreen;
