import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

// const getData = async ()=> {
//   const data= await AsyncStorage.getItem('Email');
// }

const AsyncStore3 = () => {
  const data =[];
useEffect(()=>{
  getValue();
}, [])
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [value, setvalue] = useState([]);

  const saveValue = async () => {
    data.push({name: name, mobile: mobile});
    await AsyncStorage.setItem('Data', JSON.stringify(data));
  };

  const getValue = async () => {
    const datas = await AsyncStorage.getItem(data);
    // console.log(JSON.parse(data));
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}> AsyncStorage in React Native </Text>
      <TextInput
        style={styles.InputContainer}
        placeholder="Name"
        value={name}
        onChangeText={data => setName(data)}
      />
      <TextInput
        style={styles.InputContainer}
        placeholder="Mobile"
        value={mobile}
        onChangeText={data => setMobile(data)}
      />

      <TouchableOpacity onPress={() => saveValue()}>
        <Text style={styles.saveText}> Save Value</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => getValue()}>
        <Text style={styles.showText}>Get Value</Text>
      </TouchableOpacity>

      <Text style={styles.resultText}>{value}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#7D8F69',
  },
  HeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
  InputContainer: {
    backgroundColor: 'white',
    margin: 10,
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    fontSize: 20,
  },
  saveText: {
    fontSize: 25,
    backgroundColor: 'green',
    width: 200,
    margin: 20,
    marginLeft: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    borderColor: 'black',
    borderRadius: 10,
  },
  showText: {
    fontSize: 25,
    backgroundColor: 'green',
    width: 200,
    margin: 10,
    marginLeft: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
  },
  resultText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    margin: 10,
  },
});
export default AsyncStore3;
