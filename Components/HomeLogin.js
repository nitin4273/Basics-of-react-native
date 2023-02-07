import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeLogin = ({route, navigation}) => {
  const {myName} = route.params.myName;

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Welcome{myName} </Text>

      <TouchableOpacity onPress={() => navigation.navigate('flatList')}>
        <Text style={styles.listButton}>Flatlist</Text>
      </TouchableOpacity>
      {/* // Here we done navigation on press events by calling the componenet */}
      <TouchableOpacity
        onPress={() => navigation.navigate('ListandScrollView')}>
        <Text style={styles.scrollButton}>ScrollView</Text>
      </TouchableOpacity>
    
       <TouchableOpacity
       
       onPress ={() =>navigation.navigate('webView')}>
        <Text style={styles.searchButton}>WebView </Text>
        </TouchableOpacity> 

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}> Go Back 😊 </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    textAlign: 'center',
    backgroundColor: '#829460',
    fontSize: 30,
    color:"white",
    fontWeight:"bold",
    fontFamily: "Cochin",
    height:50,
    margin:5,
  },
  backButton: {
    fontSize: 20,
    margin: 10,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#FD841F',
    height: 50,
    width: 100,
  },

  listButton: {
    fontSize: 20,
    margin: 10,
    backgroundColor: 'yellow',
    width: 100,
    height: 30,
    textAlign: 'center',
  },
  scrollButton: {
    fontSize: 20,
    margin: 10,
    backgroundColor: 'red',
    width: 100,
    height: 30,
    textAlign: 'center',
  },
  searchButton:{
    fontSize: 20,
    margin: 10,
    backgroundColor: 'cyan',
    width: 100,
    height: 30,
    textAlign: 'center',
  }
});
export default HomeLogin;
