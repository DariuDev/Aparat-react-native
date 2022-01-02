import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity ,Image} from 'react-native';
import {json} from '../webService/NewsApi'


const NewsFlatList = ({navigation}) => {
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   console.log(data);

   useEffect(() => {
     console.log(json)

     setData(json);
    
   }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator = {false}
      horizontal = {true}
        data={data}
       renderItem={({ item }) => (

  <View style={styles.item}>

  <Image source={{uri : item.icon }} style = {styles.imageView}/>

  </View>
  
   )}
        keyExtractor={({ id }, index) => id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    margin : 5,
  },
    item: {
flexDirection : 1,
borderRadius : 14,
 borderWidth:1,
marginRight : 5,
width : 300,
height : 200,
  },
  imageView : {
    flex : 1,
width: ('100%'),
       height: ('100%'),
      borderRadius : 10,
      padding : 1
      
  }
});

export default NewsFlatList;
