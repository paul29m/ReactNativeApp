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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      descripion: '',
      year: '',
      category: '',
    };
  }
  
  render() {
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
        placeholder="Descripion"
        value={this.state.descripion}
        onChangeText={(descripion) => this.setState({descripion})}
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
        onPress={() => this.saveData(this.state.name,this.state.year,this.state.descripion,this.state.category)}
        title="Save Car"
      />
       <Text
      style = {{padding : 10 }}
      />
      <Button
        onPress={() =>this.sendEmail(this.state.name,this.state.year,this.state.descripion,this.state.category)}
        title="Send Email"
        />
      <Text
      style = {{padding : 10 }}
      />
      <Button
        onPress={() => this.showAll()}
        title="Show all Cars"
        />
      </View>
  );
}

  saveData(name,year,descripion,category){
    if(name === '' || year === '' || descripion ==="" || category ===""){
      Alert.alert(
        "All rows are required!"
      )
    }else{
    
    }

  }
  showAll(){

  }

  sendEmail(name,year,descripion,category){
    if(name === '' || year === '' || descripion ===""  || category ===""){
      Alert.alert(
        "All rows are required!"
      )
    }else{
        Mailer.mail({
        subject: 'Selected car',
        recipients: ['support@example.com'],
        body: '<b>'+name+"</b><p> Year: "+year+"</p><p> Description: "+descripion+"</p><p> Category:"+ category+'</p>',
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
