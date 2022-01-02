import * as React from 'react';
import { Text, View, ScrollView, Button, SafeAreaView } from 'react-native';
import { Audio, Video } from 'expo-av';

export default class VideoPlayerScreen extends React.Component {
  state = {
    fullscreen: false,
  };
  render() {
    const { navigation, route } = this.props;
    return (
      <SafeAreaView>
      <View >
        <Button onPress={() => navigation.goBack()} title="Back"/>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 32 }}>{route.params.title}</Text>
          <Video
            ref={(r) => (this.vid = r)}
            source={{
              uri: route.params.link,
            }}
            rate={1.0}
            volume={1.0}
            muted={false}
            resizeMode="cover"
            useNativeControls
            repeat
            style={{ width: '100%', height: 300 }}
            onFullscreenUpdate={(e) => {
              this.setState({ fullscreen: true });
              console.log(e);
            }}
          />
        </View>
        <View style = {{flex : 1 ,flexDirection : 'row' }}>
        <View style = {{padding : 10 , borderRadius : 5 , borderWidth : 1  , borderColor : '#00ffff' , margin : 10,}}>
          <Text>view : {route.params.view}</Text>
        </View>
         <View style = {{padding : 10 , borderRadius : 5 , borderWidth : 1  , borderColor : '#00ffff' , margin : 10,}}>
          <Text> time : {route.params.duration}</Text>
        </View>
        </View>
          <View style = {{padding : 10 , borderRadius : 5 , borderWidth : 1  , borderColor : '#00ffff' , margin : 10,}}>
          <Text>description : {route.params.description}</Text>
        </View>
      </View>
      </SafeAreaView>
    );
  }
}
