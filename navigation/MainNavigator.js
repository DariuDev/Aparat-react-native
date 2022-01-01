import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
 import TabNavigator from './TabNavigator'
import VideoPlayerScreen from '../screens/VideoPlayerScreen'
import CategoryScreen from '../screens/CategoryScreen'
const Stack = createStackNavigator();

export default function MainNavigaor() {
  return (
     <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown : false}}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
