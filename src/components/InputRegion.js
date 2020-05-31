import React from 'react';
import {Image, View, TextInput} from 'react-native';
import {styles} from './styles/inputRegionStyle';

const InputRegion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SectionStyle}>
        <Image
          source={require('../image/search.png')}
          style={styles.ImageStyle}
        />
        <TextInput style={{flex: 1}} underlineColorAndroid="transparent" />
      </View>
    </View>
  );
};

export default InputRegion;
