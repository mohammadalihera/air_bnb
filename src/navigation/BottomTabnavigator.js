import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import SearchResults from '../screens/SearchResults';
import DestinationSearch from '../screens/DestinationSearch';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();
const BottomTabnavigator = () => {
  return (
    <Tab.Navigator tabBarOption={{activeTintColor:'#f15454'}}>
      <Tab.Screen
        name={'Explore'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color: string}) => (
            <Fontisto name="search" size={25}  />
          ),
        }}
      />
      <Tab.Screen
        name={'Saved'}
        component={SearchResults}
        options={{
          tabBarIcon: ({color: string}) => (
            <FontAwesome name="heart-o" size={25}  />
          ),
        }}
      />
      <Tab.Screen
        name={'Airbnb'}
        component={DestinationSearch}
        options={{
          tabBarIcon: ({color: string}) => (
            <FontAwesome5 name="airbnb" size={25}  />
          ),
        }}
      />
       <Tab.Screen
        name={'Message'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color: string}) => (
            <Feather name="message-square" size={25}  />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color: string}) => (
            <Feather name="user" size={25}  />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabnavigator;
