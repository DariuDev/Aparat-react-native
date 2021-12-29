import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CustomFlatList from '../components/CustomFlatList';
import { VideoPlayerScreen } from '../components/CustomFlatList';
import { MyTabs } from '../App';
const Stack = createStackNavigator();

export default function MainNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="MyTabs" component={MyTabs} />
				<Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
