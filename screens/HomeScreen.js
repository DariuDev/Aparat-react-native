import NewVideoList from '../list/NewVideoList';
import BestVideoList from '../list/BestVideoList';
import SpecialVideoList from '../list/SpecialVideoList';
import NewsFlatList from '../components/NewsFlatList'

 import * as React from 'react';
import {Text, View , ScrollView} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator = {false} >
    <NewsFlatList navigation = {navigation }/>
    <BestVideoList navigation = {navigation} />
      <NewVideoList navigation = {navigation}/>
      <SpecialVideoList navigation = {navigation}/>
     </ScrollView>
  );
}
