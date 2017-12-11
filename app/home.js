/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  AsyncStorage,
  Alert
} from 'react-native';

import Mailer from 'react-native-mail';
import store from 'react-native-simple-store';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeScreen extends Component<{}> {
    static navigationOptions = {
        title: 'Home Screen',
      };
    

  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      description: '',
      year: '',
      category: '',
    };
  }
  
  render() {
    const { navigate } = this.props.navigation
    
    return (
      <View style={{padding: 10}}>
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
        onPress={() => this.saveData(this.state.name,this.state.year,this.state.description,this.state.category)}
        title="Save Car"
      />
       <Text
      style = {{padding : 10 }}
      />
      <Button
        onPress={() =>this.sendEmail(this.state.name,this.state.year,this.state.description,this.state.category)}
        title="Send Email"
        />
      <Text
      style = {{padding : 10 }}
      />
      <Button
        onPress={() => navigate("ListScreen")}
        title="Show all Cars"
        />
         {/* <Text
      style = {{padding : 10 }}
      />
      <Button
        //onPress={() => navigate("ListScreen")}
        onPress={()=> this.showall()}
        title="Show Cars"
        /> */}
      </View>
  );
}

  saveData(name,year,description,category){
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
          "Car Saved!"
        )
        this.setState({
          name: '',
          description: '',
          year: '',
          category: ''
        })
    }

  }

  showall(){
      store.get('cars').then((res)=> 
        Alert.alert("",JSON.stringify(res))
    );

  }
  sendEmail(name,year,description,category){
    if(name === '' || year === '' || description ===""  || category ===""){
      Alert.alert(
        "All rows are required!"
      )
    }else{
        Mailer.mail({
        subject: 'Selected car',
        recipients: ['support@example.com'],
        body: '<b>'+name+"</b><p> Year: "+year+"</p><p> Description: "+description+"</p><p> Category:"+ category+'</p>',
        isHTML: true,
        attachment: {
          path: '',  // The absolute path of the file from which to read data.
          type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
          name: '',   // Optional: Custom filename for attachment
        }
      }, (error, event) => {
        Alert.alert(
          error,
          event,
          [
            {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
            {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
          ],
          { cancelable: true }
        )
      });
      
    }
  }

}



const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    height: 80, 
  }
});
