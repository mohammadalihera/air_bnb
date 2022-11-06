import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SearchResultScreen from '../screens/SearchResults';
import BottomTabnavigator from './BottomTabnavigator';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name={'Home'}
          options={{headerShown:false}}
          component={BottomTabnavigator}/>
        <Stack.Screen
          name={'Search Result'}
          options={{title: 'Search your destination'}}  
          component={SearchResultScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
