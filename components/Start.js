import React from 'react';
import { View, Text, Button, TextInput, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      backgroundColor:''
    };
  }

  render() {
    return (
      <ImageBackground
      source={require('../assets/BackgroundImage.png')}
      style={styles.container}
      >
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection:'colomn'}}>
          <Text style={styles.header}>Welcome to the Application HomeScreen</Text>
          <View style={styles.namearea}>
            <TextInput
              style={styles.input}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
              placeholder='Your Name'
            />
            <Text style={styles.information}>Choose Background Color</Text>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity 
                style={{width:50,height:50,backgroundColor:'#090C08',borderRadius:25, marginLeft:30}}
                onPress={(color) => this.setState({ backgroundColor: "#090C08" })}
                />
              <TouchableOpacity 
                style={{width:50,height:50,backgroundColor:'#474056',borderRadius:25, marginLeft:30}}
                onPress={(color) => this.setState({ backgroundColor: "#474056" })}
                />
              <TouchableOpacity 
                style={{width:50,height:50,backgroundColor:'#8A95A5',borderRadius:25, marginLeft:30}}
                onPress={(color) => this.setState({ backgroundColor: "#8A95A5" })}
                />
              <TouchableOpacity 
                style={{width:50,height:50,backgroundColor:'#B9C6AE',borderRadius:25, marginLeft:30}}
                onPress={(color) => this.setState({ backgroundColor: "#B9C6AE" })}
                />
            </View>
            <View style={styles.chat}>
              <Button
                color="#757083"
                title="Start Chatting"
                onPress={() => this.props.navigation.navigate('Chat', {
                  name:this.state.name,
                  backgroundColor:this.state.backgroundColor
                })}
              />
            </View>
            
          </View>
        </View>
      </View>
      </ImageBackground>
      
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent: "center",
  },
  header:{
    flex: 50,
    fontSize: 45,
    fontWeight:"600",
    color: '#FFFFFF',
    textAlign: 'center',
    marginLeft: 5,
    marginRight:5,
    width:"88%"
  },
  namearea:{
    alignSelf:'center',
    flex: 44,
    backgroundColor:'white',
    height: "44%",
    width:"88%",
  },
  input:{
    alignSelf:'center',
    width: "90%",
    textAlign:'center',
    height:40,
    fontSize: 16,
    fontWeight:"300",
  },
  information:{
    color:'#757083',
    fontSize: 16,
    fontWeight: "300",
    opacity: 1,
    marginBottom:10,
    marginLeft:20
  },
  chat:{
    marginTop: 15,
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  }
})