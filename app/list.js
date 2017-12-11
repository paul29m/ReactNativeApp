import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Alert
} from 'react-native';

import store from 'react-native-simple-store';

export default class ListScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Car List',
  };

  constructor(){
    super();
    this.state={
      list: ''
    }
    
    store.get('cars').then((res)=>
    this.setState({
        list:res
    })
    );
}

render(){
   const { navigate } = this.props.navigation
  return(
    <View style={{alignItems: 'center'}}>
      <FlatList
        data = {this.state.list}
        renderItem={({item}) => 
          <Text style = {styles.input} numberOfLines={5} onPress={() => navigate("EditScreen")} >
            Car Name: {item.name+'\n'}
            Year: {item.year+'\n'}
            Description: {item.description+'\n'}
            Category: {item.category} 
            </Text>
        }
       keyExtractor={(item, key) => key}  
      />
    </View>
  )
}
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    height: 130
  }
});
