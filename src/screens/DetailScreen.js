import React from 'react';
import {Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {styles} from '../styles/detailStyle';
import ImageSection from '../components/DetailComponents/ImageSection';
import InfoSection from '../components/DetailComponents/InfoSection';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.imageSection}>
        <ImageSection />
      </View>
      <View style={styles.infoSection}>
        <InfoSection />
      </View>
      <TouchableOpacity style={styles.buttonSection}>
        <Text style={styles.butonText}>Contact Seller</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;
