import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class ListScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Car List',
  };

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>This is List screen :D :D</Text>
        <Button
        onPress={() => navigate("EditScreen")}
        title="Edit"
        />
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
