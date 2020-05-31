import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles/listItemStyle';

//favorite
const ListItem = ({item}) => {
  const {id, type, price, location, bedroom, bath, sqrt, image} = item;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} borderRadius={15} source={{uri: image}} />
        <TouchableWithoutFeedback
          style={styles.iconContainer}
          onPress={() => console.log('selam')}>
          <Ionicons
            name={'favorite-border'}
            size={20}
            color={'#FFF'}
            style={styles.icon}
          />
        </TouchableWithoutFeedback>
      </View>
      <TouchableOpacity
        style={styles.textSection}
        onPress={() => {
          navigation.navigate('Detail', {
            id,
          });
        }}>
        <View style={styles.title}>
          <View style={styles.titleLeft}>
            <Text style={styles.textt}>{type}</Text>
          </View>
          <View style={styles.titleRight}>
            <Text style={styles.textt}>${price}</Text>
          </View>
        </View>
        <View style={styles.location}>
          <Text style={styles.locationText}>{location}</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.infoItem}>
            <Text style={styles.textt}>{bedroom} Bedroom</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.textt}>{bath} Bath</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.textt}>{sqrt} sqrt</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
