import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStore = () => {
  const [titleValue, settitleValue] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState([]);

  useEffect(() => {
    getValue();
  }, []);
  const saveValue = async () => {
    if (titleValue && description) {
      const todo = {
        title: titleValue,
        description: description,
      };

      const localData = await AsyncStorage.getItem('keyName', localData);
      if (localData) {
        let parseLocalData = JSON.parse(localData);
        console.log(parseLocalData);
        console.log(typeof parseLocalData);
        if (
          Object.prototype.toString.call(parseLocalData) === '[object Array]'
        ) {
          console.log('array');

          parseLocalData.push(todo);
          if (parseLocalData.length > 10) {
            parseLocalData.shift();
          }
        } else {
          parseLocalData = [];
          parseLocalData.push(todo);
        }

        // parseLocalData.push(todo);

        const strtodo = JSON.stringify(parseLocalData);
        AsyncStorage.setItem('keyName', strtodo);
      } else {
        const arr = [todo];
        const strtodo = JSON.stringify(arr);
        AsyncStorage.setItem('keyName', strtodo);
      }
      // console.log('localData', localData);

      settitleValue('');
      setDescription('');
      alert('data saved');
    } else {
      alert('please fill the data');
    }
    getValue();
  };

  const getValue = () => {
    AsyncStorage.getItem('keyName').then(value => {
      const parsetodo = JSON.parse(value);
      // console.log('parse', parsetodo);

      setValue(value);
    });
  };
  // console.log('print the value', value);
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}> AsyncStorage in React Native </Text>
      <TextInput
        style={styles.InputContainer}
        placeholder=" Enter Title"
        value={titleValue}
        onChangeText={data => settitleValue(data)}
      />
      <TextInput
        style={styles.InputContainer}
        placeholder=" Enter Description"
        value={description}
        onChangeText={data => setDescription(data)}
      />

      <TouchableOpacity onPress={() => saveValue()}>
        <Text style={styles.saveText}> Save Value</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => getValue()}>
        <Text style={styles.showText}>Get Value</Text>
      </TouchableOpacity>
      <View>
        {/* <FlatList
       data={value}
       renderItem={(item)=>{
        <Text style={styles.resultText}>{item.titleValue}</Text>
       }}
       /> */}

        <Text style={styles.resultText}>{value}</Text>
      </View>
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
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    margin: 15,
  },
});
export default AsyncStore;
