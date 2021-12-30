import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
 import TabNavigator from './TabNavigatior'
import VideoPlayerScreen from '../screens/VideoPlayerScreen'
import CategoryScreen from '../screens/CategoryScreen'
const Stack = createStackNavigator();

export default function MainNavigaor() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
