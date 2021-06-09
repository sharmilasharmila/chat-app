import React from "react";
import { View, Text, Button, TextInput, ImageBackground, StyleSheet, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      backgroundColor:""
    };
  }

  render() {
    return (
      <ImageBackground
      source={require("../assets/BackgroundImage.png")}
      style={styles.container}
      >
      <Text style={styles.header}>CHAT APP</Text>
        <View style={styles.namearea}>
          <TextInput
            style={styles.input}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            placeholder="Enter Your Name"
          />
          <Text style={styles.information}>Choose Background Color</Text>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity 
              style={{width:50,height:50,backgroundColor:"#090C08",borderRadius:25, marginLeft:30}}
              onPress={(color) => this.setState({ backgroundColor: "#090C08" })}
              />
            <TouchableOpacity 
              style={{width:50,height:50,backgroundColor:"#474056",borderRadius:25, marginLeft:30}}
              onPress={(color) => this.setState({ backgroundColor: "#474056" })}
              />
            <TouchableOpacity 
              style={{width:50,height:50,backgroundColor:"#8A95A5",borderRadius:25, marginLeft:30}}
              onPress={(color) => this.setState({ backgroundColor: "#8A95A5" })}
              />
            <TouchableOpacity 
              style={{width:50,height:50,backgroundColor:"#B9C6AE",borderRadius:25, marginLeft:30, marginRight:10}}
              onPress={(color) => this.setState({ backgroundColor: "#B9C6AE" })}
              />
          </View>
          <View style={styles.chat}>
            <Button
              color="#757083"
              title="Start Chatting"
              onPress={() => this.props.navigation.navigate("Chat", {
                name:this.state.name,
                backgroundColor:this.state.backgroundColor
              })}
            />
          </View>
        </View>
        { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
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
    height: "50%",
    fontSize: 45,
    fontWeight:"600",
    color: "#FFFFFF",
    textAlign: "center"
  },
  namearea:{
    flexDirection:"column",
    height:"40%",
    alignSelf:"center",
    width:"88%",
    position:"relative"
  },
  input:{
    alignSelf:"center",
    height: "25%",
    width: "90%",
    textAlign:"center",
    fontSize: 25,
    fontWeight:"300",
    borderWidth:4,
    borderRadius: 10
  },
  information:{
    color:"#000",
    fontSize: 20,
    fontWeight: "300",
    opacity: 1,
    marginBottom:10,
    marginLeft:20
  },
  chat:{
    marginTop: 15,
    fontWeight: "600",
    textAlign: "center",
  }
})