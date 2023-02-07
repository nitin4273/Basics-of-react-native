import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
const ApiCall = () => {
  const [myUserData, setMyUserData] = useState([]);
  const [isLoaded, setIsloaded] = useState(true);
  const getUserData = async () => {
    try {
      const response = await fetch(
        'https://facebook.github.io/react-native/movies.json',
      );
      const myData = await response.json();

      setMyUserData(myData);
      setIsloaded(false);
      // console.log(myData);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
      getUserData();
    }, []);
    // console.log(myUserData.movies[1].title)
  return (
    <View style={Styles.container}>
      <Text style={Styles.textHead}>List of Movies</Text>
      <FlatList
        data={myUserData.movies}
        renderItem={({item}) => {
          return (
            <View>
                 
              <Text style={Styles.textName}>{item.title} </Text>
              <Text style={Styles.textYear}>{item.releaseYear} </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  textHead: {
    fontWeight: 'bold',
    fontSize: 50,
    margin: 12,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#E26868',
  },
  textName: {
    fontSize: 40,
    fontWeight: '400',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'pink',
  },
  textYear: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#B4CDE6',
  },
});
export default ApiCall;
