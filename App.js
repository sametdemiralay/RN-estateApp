import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ListingsScreen from './src/screens/ListingsScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import MapScreen from './src/screens/MapScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DetailScreen from './src/screens/DetailScreen';

const Tab = createBottomTabNavigator();

function TabArea() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          size = focused ? 35 : 30;
          if (route.name === 'Listings') {
            iconName = 'md-home';
          } else if (route.name === 'Discover') {
            iconName = 'md-compass';
          } else if (route.name === 'Map') {
            iconName = 'md-map';
          } else if (route.name === 'Favorites') {
            iconName = 'md-heart';
          } else if (route.name === 'Profile') {
            iconName = 'md-person';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#121947',
        inactiveTintColor: '#D6D7DC',
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Listings" component={ListingsScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Listings" component={TabArea} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
