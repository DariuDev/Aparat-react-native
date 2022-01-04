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
      <Stack.Navigator screenOptions = {{headerStyle: {
            backgroundColor: 'red'
          }}}>
        <Stack.Screen name="Aparat" component={TabNavigator} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
