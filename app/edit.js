import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert
} from 'react-native';

import store from 'react-native-simple-store';

export default class EditScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Edit Car',
  };
  constructor(props) {
    //const {initialName} =props.navigation.state.params.user;
    super(props);
    this.state = { 
      name: 'Mercedes',
      description: '',
      year: '',
      category: '',
    };
    //this.setState({name: initialName})
  }

  render() {
    //const {initialName} = this.props.navigation.state.params.user;
   
    return (
      <View >
        <TextInput
        style={styles.input}
        //placeholder="Name"
        value={this.state.name}
        onChangeText={(name) => this.setState({name})}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={this.state.description}
        onChangeText={(description) => this.setState({description})}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        value={this.state.year}
        onChangeText={(year) => this.setState({year})}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={this.state.category}
        onChangeText={(category) => this.setState({category})}
      />
       <Text
      style = {{padding : 10 }}
      />
      <Button
        onPress={() => this.updateData(this.state.name,this.state.year,this.state.description,this.state.category)}
        title="Save Car"
      />
      </View>
    );
  }
  updateData(name,year,description,category){
    if(name === '' || year === '' || description ==="" || category ===""){
      Alert.alert(
        "All rows are required!"
      )
    }else{
        const car = {
            name:name,
            year:year,
            description:description,
            category:category
        };
        //store.delete('cars')
        store.push('cars',car);
        Alert.alert(
          "Car updated!"
        )
        this.setState({
          name: '',
          description: '',
          year: '',
          category: ''
        })

        const { navigate } = this.props.navigation
        navigate("ListScreen")
    }
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    height: 80
  }
});
