import * as React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { Audio, Video } from 'expo-av';

export default class VideoPlayerScreen extends React.Component {
  state = {
    fullscreen: false,
  };
  render() {
    const { navigation, route } = this.props;
    return (
      <View>
        <Button onPress={() => navigation.goBack()} title="Back" />
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
          <Text style = {{fontSize : 32}}>{route.params.title}</Text>
          
    
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

          
          <Text>{route.params.description}</Text>
          <Text>{route.params.duration}</Text>
        </View>
      </View>
    );
  }
}
