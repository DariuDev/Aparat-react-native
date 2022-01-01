import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity  } from 'react-native';




const CategoryVideoFlatList = ({navigation}) => {
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   console.log(data);

   useEffect(() => {
     fetch('https://reactnative.dev/movies.json')
       .then((response) => response.json())
       .then((json) => setData(json))
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));
   }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator = {false}
      horizontal = {false}
        data={data.movies}
       renderItem={({ item }) => (
<TouchableOpacity style={styles.item}
  onPress={() => navigation.navigate('VideoPlayerScreen',{id : item.title})}>
    <Text style={styles.title}>{item.id + '. ' + item.title}</Text>
  </TouchableOpacity> )}
        keyExtractor={({ id }, index) => id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,

  },
  item: {
    background: '#ff0000',
flexDirection : 1,
borderRadius : 14,
marginTop : 5
  },
  title: {
    fontSize: 32,
    padding : '25%',
    color : 'white',
  },
});

export default CategoryVideoFlatList;
