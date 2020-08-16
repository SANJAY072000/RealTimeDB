import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,
  KeyboardAvoidingView, FlatList } from 'react-native';
import {Input, Card, Button, Icon} from 'native-base';
import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCW8qayppSOogT1LolD6EnNzYR3NheAS9Q",
    authDomain: "rnbootcamp-a04ae.firebaseapp.com",
    databaseURL: "https://rnbootcamp-a04ae.firebaseio.com",
    projectId: "rnbootcamp-a04ae",
    storageBucket: "rnbootcamp-a04ae.appspot.com",
    messagingSenderId: "1068100926425",
    appId: "1:1068100926425:web:7be56739506bcfe99fb7c8",
    measurementId: "G-8V24XYCJTJ"
  };
  firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Welcome to app</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
