import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles/headerStyles';
import PushNotification from 'react-native-push-notification';

const Header = ({title}) => {
  React.useEffect(() => {
    PushNotification.configure({
      onRegister: function(token) {
        console.log('TOKEN:', token);
      },
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
        //notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);

  const testPush = () => {
    PushNotification.localNotification({
      title: 'My Notification Title', // (optional)
      message: 'My Notification Message', // (required)
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSide} />

      <View style={styles.textSide}>
        <Text style={styles.text}>{title}</Text>
      </View>

      <View style={styles.rightSide}>
        <TouchableOpacity onPress={()=> testPush()}>
          <Ionicons name="notifications-none" size={25} color={'#FFF'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
