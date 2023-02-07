import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SearchBar} from 'react-native-screens';

const data = [
  {name: '1.Rohit(c)', id: '1'},
  {name: '2.Rahul(vc)', id: '2'},
  {name: '3.Virat🦁', id: '3'},
  {name: '4.SKY🔥', id: '4'},
  {name: '5.Hardik(🏏)', id: '5'},
  {name: '6.Dinesh(🧤)', id: '6'},
  {name: '7.Axar(🏏)', id: '7'},
  {name: '8.Kumar', id: '8'},
  {name: '9.Shami', id: '9'},
  {name: '10.Arshdeep', id: '10'},
  {name: '11.Chahal', id: '11'},
];
const Search = (navigation) => {
  const [dataFromState, setData] = useState(data);
  const [value, setValue] = useState('');
  const [filterdata, setFilterData] = useState(data);
  const item = item => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  const searchName = input => {
    setValue(input);
    if (input) {
      const newArray = dataFromState.filter(item => {
        console.log('item', item.name);
        const dataArray = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const searchArray = input.toUpperCase();
        return dataArray.indexOf(searchArray) > -1;
      });

      setFilterData(newArray);
    } else {
      setFilterData(data);
    }
  };
  return (
    <ScrollView>
      <Text style={styles.textHead}>
        Indian Team Playing XI for Upcoming T20WC
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Enter Name"
        value={value}
        onChangeText={input => {
          searchName(input);
        }}
      />

      <FlatList
        data={filterdata}
        renderItem={({item}) => (
          <Text style={styles.textBase}>{item.name}</Text>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textBase: {
    padding: 20,
    backgroundColor: 'pink',
    margin: 10,
    fontSize:15,
  },
  Container: {
    flex: 1,
  },
  textHead: {
    fontSize: 25,
    fontWeight:"bold",
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 390,
    marginHorizontal: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    fontSize: 20,
    margin: 10,
  },
});

export default Search;
