import * as React from 'react';
import {Text, View , ScrollView} from 'react-native';

import MainNavigator from './navigation/MainNavigator'

export default function App() {
  return (
    <View style = {{flex : 1}} >
      <MainNavigator/>
    </View>
  );
}
