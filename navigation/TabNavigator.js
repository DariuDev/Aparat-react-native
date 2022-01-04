import * as React from 'react';
import {Text, View , ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
    <Tab.Navigator screenOptions={ ({ route }) => ({
      headerShown : false ,
      backgroundColor : 'red',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-list';
            } else if (route.name === 'Category') {
              iconName = focused ? 'ios-information-circle' : 'ios-list';
            }else if (route.name === 'Favorite') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
      
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'blue',
         headerStyle: { backgroundColor: 'red'  },
         headerTintColor : 'white' ,
         headerTitleStyle: {
            fontWeight: 'bold',
          }
         
        }) } >
      <Tab.Screen  name = 'Home' component={HomeScreen} >
      <homeStack.Screen  
      name = 'VideoPlayer' component = {VideoPlayerScreen} />
         </Tab.Screen>
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}
