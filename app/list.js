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
import Store from 'react-native-store';


export default class ListScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Car List',
  };

  DB = {
    'carDb' : Store.model('carsDb')
  }
  constructor(){
    super();
    this.state={
      list: ''
    }
    
    // store.get('cars').then((res)=>
    // this.setState({
    //     list:res
    // })
    // );
}
componentDidMount() {
  this.DB.carDb.find().then(resp =>  this.setState({list:resp}))
}
componentDidUpdate(){
  this.DB.carDb.find().then(resp =>  this.setState({list:resp}))  
}

render(){
   const { navigate } = this.props.navigation
  return(
    <View style={{alignItems: 'center'}}>
      <FlatList
        data = {this.state.list}
        renderItem={({item}) => 
          <Text style = {styles.input} numberOfLines={5} onPress={() => navigate('EditScreen', {name: item._id})} onLongPress={()=> this.deleteDialog(item._id)}>
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

deleteDialog(id){
  Alert.alert(
    'Warning!',
    'Are you sure you whant tu delete this car?',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => {
        this.DB.carDb.removeById(id),
        this.componentDidUpdate()
        }
      },
    ],
  )
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    height: 130
  }
});
