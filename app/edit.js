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
import Store from 'react-native-store';


export default class EditScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Edit Car',
  };

  DB = {
    'carDb' : Store.model('carsDb')
  }
  constructor(props) {
    super(props);
    this.state = { 
      id: this.props.navigation.state.params.name,
      name: '',
      description: '',
      year: '',
      category: '',
    };
   
  }

  componentDidMount() {
    this.DB.carDb.find({
      where:{
       _id: this.state.id
      }
    }).then(resp =>  
      this.setState({
      name: resp[0].name,
      description: resp[0].description,
      year: resp[0].year,
      category: resp[0].category
    })
    );
    
  }
  
  render() {
   
    return (
      <View >
        <TextInput
        style={styles.input}
        placeholder="Name"
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
        onPress={() => this.updateData(this.state.id,this.state.name,this.state.year,this.state.description,this.state.category)}
        title="Update Car"
      />
      </View>
    );
  }
  updateData(id,name,year,description,category){
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
        //store.push('cars',car);
        
        const { navigate } = this.props.navigation
        this.DB.carDb.updateById(car,id)
        Alert.alert(
          "Car updated!",
          "",
          [
          // {text: 'Cancel', style: 'cancel'},
          {text: 'OK', onPress: () => navigate("ListScreen")}
          ]
        )
        this.setState({
          name: '',
          description: '',
          year: '',
          category: ''
        })

    }
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    height: 80
  }
});
