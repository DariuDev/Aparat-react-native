

import * as React from 'react';
import {Text, View , ScrollView , Button} from 'react-native';

class VideoPlayerScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          id: {JSON.stringify(navigation.getParam('id', 'NO-ID'))}
        </Text>
      </View>
    );
  }
}