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
  constructor(props){
    super(props);
    this.state = {
      msg:'',
      msglst:[]
    };
  }

sendmsg=msg=>{
  let msglstref=firebase.database().ref("msglst"),
  newmsgref=msglstref.push();
  newmsgref.set({
    text:msg,
    time:Date.now()
  });
  this.setState({
    msg:''
  });
}

updatelst=msglst=>{
  this.setState({msglst});
}

componentDidMount(){
  let self=this;
  firebase.database().ref('msglst').on('value',res=>{
    if(res.val()){
      self.updatelst(Object.values(res.val()));
    }
  });
}

  render(){
    return (
      <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Message Board</Text>
        </View>
        <View style={styles.listContainer}>
        <FlatList data={this.state.msglst} inverted
          renderItem={({item})=>(
            <Card style={styles.listItem}>
              <Text style={styles.messageText}>{item.text}</Text>
              <Text style={styles.timeText}>
                {new Date(item.time).toLocaleDateString}</Text>
            </Card>
          )} keyExtractor={a=>a.time.toString()}/>
          </View>
          <View style={styles.inputContainer}>
            <Input onChangeText={msg=>this.setState({msg})}
              value={this.state.msg} placeholder='Enter message'/>
            <Button danger rounded icon
              onPress={()=>this.sendmsg(this.state.msg)}>
              <Icon name='arrow-forward'/>
            </Button>
          </View>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    margin: 2,
    backgroundColor: "#01CBC6"
  },
  header: {
    backgroundColor: "#2B2B52",
    alignItems: "center",
    height: 40,
    justifyContent: "center"
  },
  headerText: {
    paddingHorizontal: 10,
    color: "#FFF",
    fontSize: 20
  },
  listContainer: {
    flex: 1,
    padding: 5
  },
  listItem: {
    padding: 10
  },
  messageText: {
    fontSize: 20
  },
  timeText: {
    fontSize: 10
  },
  inputContainer: {
    flexDirection: "row",
    padding: 5,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#2B2B52",
    color: "#fff"
  }
});
