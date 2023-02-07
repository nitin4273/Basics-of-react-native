import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
const Flexbox = () => {

     const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [age, setAge] = useState([]);
    const [user, setUser] = useState('');

    const renderItem = ({item}) => {
        // console.log(item)
        return (
           <View style={styles.outputList}>
             <Text style={styles.listText}> Name:{item.name} </Text>
          <Text style={styles.listText}> Age:{item.age} </Text>
     </View>
        )
    }

   
    

    const addData = () => {
        let newArray = [...data];
        newArray.push({name: value, age: user});
        setData(newArray);
        setValue('');
        setUser('');
        
      };
      const lessFilter =()=>{
        let newArray = [...data]; 
        let n= newArray.filter((age)=>{
return age<= 26
        })
        setData(newArray);
      }
  return (
   
    <View style={styles.conatiner}>
         
      <View style={styles.innerContainer}>
        <TouchableOpacity>
          <Text style={styles.lessButton}
         onPress = {() => lessFilter()}> Less than 26 </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.resetButton}>Reset </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.greaterButton}> Greater than 26 </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.outPut}>
<FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        /> 
</View>

      <View style={styles.footer}>

     
        <TouchableOpacity onPress={() => addData()}>
          <Text style={styles.textBase}>+</Text>
        </TouchableOpacity>
       
        <TextInput style={styles.textInput} placeholder="Age"
        value={user}
        onChangeText={text => setUser(text)}></TextInput>

        <TextInput style={styles.textInput} placeholder="Name"
        value={value}
        onChangeText={text => setValue(text)}></TextInput>
      </View>

      
    </View>
    /* </ScrollView> */
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'gray',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  footer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 300,
    marginHorizontal: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    
  },
  lessButton: {
    width: '60%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ABB3',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  greaterButton: {
    width: '60%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ABB3',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    marginLeft: 50,
  },
  resetButton: {
    width: 70,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ABB3',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },

  textBase: {
    fontSize: 50,
    borderRadius: 70,
    backgroundColor: "white",
    width: 100, 
    textAlign:'center',
    marginHorizontal:150,
    margin:10,
    
  },
  outputList:{
  backgroundColor:"white",
  margin:5,
  flex: 1,
  },
  listText:{
    fontSize:15,
  }
});
export default Flexbox;
