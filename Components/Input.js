import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  VirtualizedList,
  FlatList,
  ScrollView,
} from 'react-native';
const Input = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [email, setEmail] = useState([]);
  const [user, setUser] = useState('');
  const renderItem = ({item}) => {
    // console.log(item)
    return (
      <View style={styles.list}>
        <Text style={styles.listText}> Name:{item.name} </Text>
        <Text style={styles.listText}> Email:{item.email} </Text>
        
        <TouchableOpacity onPress={() => deleteData()}>
          <Text style={styles. deleteBtn}> Delete </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const addData = () => {
    let newArray = [...data];
    newArray.push({name: value, email: user});
    setData(newArray);
    setValue('');
    setUser('');
  };

  const deleteData = () => {
    let newArray = [...data];
    let index = 0;
    newArray.splice(index, 1);
    setData(newArray);
  };
  return (
    <View style={styles.conatiner}>
      <ScrollView>
        <Text style={styles.textBase}> Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder=" eg.Nitin"
          value={value}
          onChangeText={text => setValue(text)}
        />
        <Text style={styles.textBase}> Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="eg.abc@gmail.com"
          value={user}
          onChangeText={text => setUser(text)}
        />
        <TouchableOpacity onPress={() => addData()}>
          <Text style={styles.addBtn}> Add </Text>
        </TouchableOpacity>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />

       
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#8BBCCC',
  },
  textBase: {
    fontSize: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
    alignItems: 'center',
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 200,
    marginHorizontal: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
  addBtn: {
    width: '50%',
    marginLeft: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4C6793',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
  },
  list: {
    backgroundColor: 'white',
    margin: 5,
    flex: 0.5,
  },
  deleteBtn: {
    width: '30%',
    marginLeft: 140,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  listText: {
    fontSize: 25,
    textAlign: 'center',
    padding: 0,
  },
});
export default Input;
