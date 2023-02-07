import React, {redux} from 'react';
import {View, Text, StyleSheet, Button,backgroundImage} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from './Action/action';
import changeTheNumber from './Reducer/upDown';

const ReduxCounterApp = () => {
  const dispatch = useDispatch();

  const mystate = useSelector(state => state.changeTheNumber);
  // geting the data from the store by using useSelector in the myState state .
  return (
    
    <View style={styles.continer}>
      <Text style={styles.textBase}>Counter App</Text>
      <Text style={styles.counterText}>{mystate.count}</Text>
      <View style={styles.incrementbuttonContainer}>
        <Button
          title="➕ Increment"
          onPress={() => {
            //dispatching
            dispatch(incNumber());
          }}
        />
      </View>
     
      <View style={styles.decrementbuttonContainer}>
        <Button
          title="➖ Decrement"
          onPress={() => {
            dispatch(decNumber());
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  textBase: {
    marginTop:20,
    fontSize: 40,
    fontWeight: 'bold',
    borderRadius: 30,
    padding: 10,
    color: 'white',
    backgroundColor: 'black',
  },
  counterText: {
    borderColor:"black",
    borderRadius: 30,
    fontSize: 100,
    width:140,
    
    textAlign:"center",
    color: 'black',
    marginTop:150,
    marginBottom:50,
    padding:5,
    backgroundColor:"#C3F8FF",
  },
  incrementbuttonContainer: {
    fontSize:20,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor:"#E8DFCA",
  },
  decrementbuttonContainer: {
    margin: 5,
    padding:10,
    borderRadius: 10,
    backgroundColor:"#E8DFCA",
  },

});

export default ReduxCounterApp;
