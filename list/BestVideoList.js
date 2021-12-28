import * as React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import CustomFlatList from '../components/CustomFlatList'
const BestVideoList = props => {
  return (
    <MainView>
      <Title>Best Videos</Title>
      <Card> 
      <CustomFlatList/>
      </Card>
    </MainView>
  );
};
const MainView = styled.View`
  height: 250px;
`;
const Title = styled.Text`
  color: '#b8ece';
  font-size: 15px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

`;
const Card = styled.View`
  width: 100%;
  height: 100%;
  flex: 3;
`;

export default BestVideoList;
