import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from './styles/InfoSectionStyles';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const InfoSection = () => {
  const route = useRoute();
  const infoList = useSelector(state => state.infoList);
  const [veri, setVeri] = React.useState([]);

  const specialID = () => {
    const al = infoList.filter(val => route.params.id === val.id);
    setVeri(al[0]);
  };

  React.useEffect(() => {
    specialID();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconSection}>
        <Ionicons
          name={'favorite-border'}
          size={30}
          color={'#121947'}
          style={styles.icon}
        />
      </View>

      <Text style={styles.titleSection}>{veri.location}</Text>

      <Text style={styles.infoSection}>${veri.price}</Text>

      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text style={styles.textt}>{veri.bedroom} Bedroom</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.textt}>{veri.bath} Bath</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.textt}>{veri.sqrt} sqrt</Text>
        </View>
      </View>

      <Text style={styles.infoLargeSection}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        suscipit aliquid pariatur porro animi quae quod a quia libero sed
        architecto odio similique ex labore quibusdam iure molestiae, harum cum
        sit voluptatum, deleniti veniam asperiores praesentium. Hic voluptatum,
        quaerat, quam tenetur odio nulla enim inventore, delectus accusantium
        ducimus quas veritatis.
      </Text>

      <Text style={styles.titleSectionFact}>Facts & Features</Text>

      <View style={styles.bottomSection}>
        <View style={styles.bottomSectionItem}>
          <View style={styles.bottomItem}>
            <FeatherIcons name={'home'} size={40} color={'#121947'} />
          </View>
          <View style={styles.bottomItem}>
            <Text style={styles.bottomItemTitle}>TYPE</Text>
            <Text style={styles.bottomItemPar}>Single Family Home</Text>
          </View>
        </View>
        <View style={styles.bottomSectionItem}>
          <View style={styles.bottomItem}>
            <FeatherIcons name={'calendar'} size={40} color={'#121947'} />
          </View>
          <View style={styles.bottomItem}>
            <Text style={styles.bottomItemTitle}>YEAR BUILT</Text>
            <Text style={styles.bottomItemPar}>Single Family Home</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.bottomSectionItem}>
          <View style={styles.bottomItem}>
            <FeatherIcons name={'sun'} size={40} color={'#121947'} />
          </View>
          <View style={styles.bottomItem}>
            <Text style={styles.bottomItemTitle}>HEATING</Text>
            <Text style={styles.bottomItemPar}>Single Family Home</Text>
          </View>
        </View>
        <View style={styles.bottomSectionItem}>
          <View style={styles.bottomItem}>
            <Ionicons name={'ac-unit'} size={40} color={'#121947'} />
          </View>
          <View style={styles.bottomItem}>
            <Text style={styles.bottomItemTitle}>COOLING</Text>
            <Text style={styles.bottomItemPar}>Single Family Home</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.bottomSectionItem}>
          <View style={styles.bottomItem}>
            <Ionicons name={'drive-eta'} size={40} color={'#121947'} />
          </View>
          <View style={styles.bottomItem}>
            <Text style={styles.bottomItemTitle}>GARAGE</Text>
            <Text style={styles.bottomItemPar}>Single Family Home</Text>
          </View>
        </View>
        <View style={styles.bottomSectionItem}>
          <View style={styles.bottomItem}>
            <FeatherIcons name={'maximize'} size={40} color={'#121947'} />
          </View>
          <View style={styles.bottomItem}>
            <Text style={styles.bottomItemTitle}>LOT</Text>
            <Text style={styles.bottomItemPar}>Single Family Home</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default InfoSection;
