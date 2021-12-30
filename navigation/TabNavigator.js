import * as React from 'react';
import {Text, View , ScrollView} from 'react-native';
//screens
import HomeScreen from '../screens/HomeScreen'
import CategoryScreen from '../screens/CategoryScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideoPlayerScreen from '../screens/VideoPlayerScreen'

const Tab = createBottomTabNavigator();
const homeStack = createNativeStackNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen  name = 'Home' component={HomeScreen} >
      <homeStack.Screen  
      name = 'VideoPlayer' component = {VideoPlayerScreen} />
         </Tab.Screen>
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}