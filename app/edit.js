import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class EditScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Edit Car',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Edit screen :D :D</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
