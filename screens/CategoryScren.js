import * as React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import CategoryVideoFlatList from '../components/CategoryVideoFlatList'

const CategoryScreen = props => {
  return (
    <MainView>
      <Card>
      <CategoryVideoFlatList navigation = {props.navigation}/>
    </Card>
      
    </MainView>
  );
};

const MainView = styled.View`
flex:1;
`;

const Card = styled.View`
  width: 100%;
  height: 100%;
`;

export default CategoryScreen;
