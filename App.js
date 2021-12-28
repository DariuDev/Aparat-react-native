import * as React from 'react';
import {Text, View , ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//screens
import NewVideoList from './list/NewVideoList';
import BestVideoList from './list/BestVideoList';
import SpecialVideoList from './list/SpecialVideoList';
 import CustomFlatList from './components/CustomFlatList'

function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator = {false} >
    <BestVideoList />
      <NewVideoList />
      <SpecialVideoList />
     </ScrollView>
  );
}

function CategoryScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function FavoriteScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <MyTabs />
      <CustomFlatList />
    </NavigationContainer>
  );
}
