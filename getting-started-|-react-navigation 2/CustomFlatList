import React from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
	},
];

const Item = ({ title, navigation }) => (
	<TouchableOpacity
		style={styles.item}
		onPress={() => navigation.navigate('VideoPlayerScreen')}
	>
		<Text style={styles.title}>{title}</Text>
	</TouchableOpacity>
);
const App = ({ navigation }) => {
	const renderItem = ({ item }) => <Item title={item.title} />;

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				data={DATA}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
	);
};




const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		margin: 5,
	},
	item: {
		background: '#00ffff',
		flexDirection: 1,
		borderRadius: 14,
		marginRight: 5,
		width: 200,
	},
	title: {
		fontSize: 32,
	},
});

export default CustomFlatList;
