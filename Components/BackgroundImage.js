import React from "react";
import { ImageBackground, StyleSheet, Text, View ,TextInput} from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

const BackgroundImage = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <TextInput
      style={styles.TextInput}
      placeholder="✍️UserName"/>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  TextInput:{
    backgroundColor: 'white',
    width: '95%',
    height: 45,
    borderColor: 'black',
    margin: 10,
    marginLeft: 10,
  },
});

export default  BackgroundImage;