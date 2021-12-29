import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomFlatList from './components/CustomFlatList';

import MainNavigator from './routes/mainNavigator';




export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<MainNavigator />
		</View>
	);
}

