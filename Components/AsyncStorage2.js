import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const AsyncStore = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState([]);
  useEffect(() => {
    getValue();
  }, []);
  const saveValue = async () => {
    if (textInputValue && description) {
      const todo = {
        title: textInputValue,
        description: description,
      };

      const localData = await AsyncStorage.getItem('keyName');
      if (localData) {
        const parseLocalData = JSON.parse(localData);
        if (parseLocalData.length == 10) {
          parseLocalData.shift();
        }
        parseLocalData.push(todo);
        const strtodo = JSON.stringify(parseLocalData);
        AsyncStorage.setItem('keyName', strtodo);
      } else {
        const arr = [todo];
        const strtodo = JSON.stringify(arr);
        AsyncStorage.setItem('keyName', strtodo);
      }

      console.log('localdatahere', localData);

      setTextInputValue('');
      setDescription('');
      alert('data saved');
    } else {
      alert('please fill data');
    }
    getValue();
  };

  const getValue = () => {
    AsyncStorage.getItem('keyName').then(value => {
      const parsetodo = JSON.parse(value);
      console.log('parse', parsetodo);
      setValue(parsetodo);
    });
  };
  console.log('value will print', value);
  return (

      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text>AsyncStorage in React-native</Text>
          <TextInput
            placeholder="Enter your title"
            value={textInputValue}
            onChangeText={data => {
              setTextInputValue(data);
            }}></TextInput>
          <TextInput
            placeholder="Enter your Description"
            value={description}
            onChangeText={data => {
              setDescription(data);
            }}></TextInput>
          <TouchableOpacity
            style={styles.addBautton}
            onPress={() => saveValue()}>
            <Text style={styles.addText}>Add text</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addBautton}
            onPress={() => getValue()}>
            <Text style={styles.addText}>Show text</Text>
          </TouchableOpacity>
          <View>
            {value.map(itemVal => {
              return (
                <View key={itemVal.id}>
                  <View style={{flexDirection: 'row', margin: '5%'}}>
                    <Text
                      style={{fontSize: 20, textAlign: 'center', flex: 0.4}}>
                      Title:
                    </Text>
                    <Text style={styles.textStyle}>{itemVal.title}</Text>
                  </View>
                  <View style={{flexDirection: 'row', margin: '5%'}}>
                    <Text
                      style={{fontSize: 20, textAlign: 'center', flex: 0.4}}>
                      Description:
                    </Text>
                    <Text style={styles.textStyle}>{itemVal.description}</Text>
                  </View>
                </View>
              );
            })}
            {console.log('flatlist====', value)}
          </View>
        </View>
      </SafeAreaView>
    
  );
};
const styles = StyleSheet.create({
  addBautton: {
    width: '60%',
    backgroundColor: '#937DC2',
    marginLeft: '20%',
    marginTop: '5%',
  },
  addText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    flex: 0.4,
    borderWidth: 1,
    borderColor: 'black',
  },
});
export default AsyncStore;
