import React,{useState} from 'react';
import {View, Text, TextInput, StyleSheet,TouchableOpacity, Button, FlatList} from 'react-native';
const Input=()=>{
    const list =[
         {id:1,name:"nitin",email:"nitin@gmail.com"},
         {id:2,name:"harsh",email:"abc@gmail.com"},
    ]
    const [ data,setData]=useState([]);
    const [ value,setValue] = useState("");
    const [email,setEmail]= useState([]);
     const [user,setUser]=useState("");
    const renderItem=({item})=>{
        return(
<View style={styles.list}>
    <Text>{item.name}</Text>
    <Text>{item.email}</Text>
</View>
        )
    }
const addData=()=>{
        let newArray=[...data]
         newArray.push({name:value})
        setData(newArray)
        setValue("")

    //     let arrayNew=[...email]
    //       arrayNew.push({email:user})
    //     setEmail(newArray)
    //  setUser("")
}
       
// const deleteData=()=>{
//     [
//         {text:'delete',onPress:( ) =>{ }, style:'delete'},
//         {text:'ok',onPress:() =>{
//             const filteredData = setData.filter(item => item.id !==id);
//             setData(filteredData);
//         }}
//     ]

//  }
    return(
<View style={styles.conatiner}>

    <Text style={styles.textBase}> Name</Text>
    <TextInput style={styles.textInput}
    placeholder="Name"
     value={value}
    onChangeText={(text)=>setValue(text)}
/>
{/* <Text style={styles.textBase}> Email</Text>
<TextInput style={styles.textInput}
    placeholder="abc@gmail.com"
     value={user}
    onChangeText={(text)=>setUser(text)}
/>   */}
    <TouchableOpacity
    onPress={()=>addData()}>
    <Text style={styles.addBtn}> Add  </Text>
    </TouchableOpacity>

    {/* <TouchableOpacity
    onPress={()=>deleteData()}>
        <Text style={styles.deleteBtn}>Delete</Text>
    </TouchableOpacity>  */}
    <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}

    />
    {/* <FlatList
    data={email}
    keyExtractor={(item)=>item.id}
    renderItem={renderItem}
    /> */}
     </View>
     
    )
}
const styles = StyleSheet.create({
    conatiner:{
flex:1,
backgroundColor:"coral",
    },
    textBase:{
        fontSize:20,
        justifyContent:"center",
        alignContent:'center',
        alignItems:"center",
        padding:10,
    },
    textInput:{
        borderWidth:1,
        borderColor:"black",
        width:200,
        marginHorizontal:10,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
    },
    addBtn:{
        width: '50%',
        marginLeft: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: 'black',
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold",
        color:"white",
    },
    list:{
        backgroundColor:"pink",
        margin:10,
    },
    deleteBtn:{
        width: '50%',
        marginLeft: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: 'black',
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold",
        color:"white",
    },
})
export default Input;



import React ,{useState}from "react";
import{View,Text,StyleSheet,TouchableOpacity,FlatList,TextInput,ScrollView,SafeAreaView} from "react-native";
const Filter=()=>{
    return(
 
<ScrollView style={styles.Container}>
<SafeAreaView>
    <View style={styles.innerContainer}>
<TouchableOpacity >
          <Text style={styles.lessButton}> Less than 26 </Text>
        </TouchableOpacity>

<TouchableOpacity>
<Text style={styles.resetButton}>Reset </Text>
</TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.greaterButton}> Greater than 26 </Text>
        </TouchableOpacity>
        </View>
        <View>
        <TextInput
          style={styles.textInputName}
          placeholder=" Enter Your Name"
        />

        <TextInput 
        style={styles.textInputAge}
        placeholder = "Enter your Age"
        />
        
        </View>

{/* <TextInput 
        style={styles.textInput}
        placeholder = "Enter your Gender"
        />

<TextInput 
        style={styles.textInput}
        placeholder = "Enter your Profession"
        />

<TextInput 
        style={styles.textInput}
        placeholder = "Enter your City"
        /> */}
        <View style={styles.Search}>
             <TextInput 
             style={styles.searchBar}
             placeholder ="Add Something"
             /> 

             <TouchableOpacity>
                <Text style={styles.textBase}>+</Text>
                </TouchableOpacity>
        </View>
      
        </SafeAreaView>
</ScrollView>
 

    )
}
const styles= StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"lightgray",
    
    },
    innerContainer:{
        flexDirection:"row",  
    },
    lessButton:{
    width: '60%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'maroon',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,

    },
    greaterButton:{
        width: '60%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'maroon',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        margin:10,
        marginLeft:50,
    
    },
    resetButton:{
        width:70,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'maroon',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        margin:10,
       
    },
    textInputName: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 300,
    
        marginHorizontal: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 20,
         margin:10,
    
    },
    textInputAge: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 300,
      
        marginHorizontal: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 20,
         margin:10,
    },
    searchBar:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 300,
        marginHorizontal: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 20,
        margin:510,
        
       
    
    },
    textBase:{
        fontSize:50,
        marginLeft:0,
         margin:520,
        backgroundColor:"white",
        borderRadius:100,
width:70,
textAlign:"center",
       
        // marginLeft:400,
    },
    Search:{
        flex:1,
        flexDirection:"row",
    },
    Bin:{
        flex:1,
    }
    
})
export default Filter;


import React form "react";
import {View,Text} from "react-native";
const Flexbox=()=>{
  return(
<View>
  <Text>Hii</Text>
  <View>
    <Text> </Text>
  </View>
</View>
  )

}
const styles = StyleSheet.craete({

})
export default Flexbox;



import React ,{useState}from "react";
import{View,Text,StyleSheet,TouchableOpacity,FlatList,TextInput,ScrollView,SafeAreaView} from "react-native";
const Filter=()=>{
    return(
 
<ScrollView style={styles.Container}>
<SafeAreaView>
    <View style={styles.innerContainer}>
<TouchableOpacity >
          <Text style={styles.lessButton}> Less than 26 </Text>
        </TouchableOpacity>

<TouchableOpacity>
<Text style={styles.resetButton}>Reset </Text>
</TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.greaterButton}> Greater than 26 </Text>
        </TouchableOpacity>
        </View>
        <View>
        <TextInput
          style={styles.textInputName}
          placeholder=" Enter Your Name"
        />

        <TextInput 
        style={styles.textInputAge}
        placeholder = "Enter your Age"
        />
        
        </View>

{/* <TextInput 
        style={styles.textInput}
        placeholder = "Enter your Gender"
        />

<TextInput 
        style={styles.textInput}
        placeholder = "Enter your Profession"
        />

<TextInput 
        style={styles.textInput}
        placeholder = "Enter your City"
        /> */}
        <View style={styles.Search}>
             <TextInput 
             style={styles.searchBar}
             placeholder ="Add Something"
             /> 

             <TouchableOpacity>
                <Text style={styles.textBase}>+</Text>
                </TouchableOpacity>
        </View>
      
        </SafeAreaView>
</ScrollView>
 

    )
}
const styles= StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"lightgray",
    
    },
    innerContainer:{
        flexDirection:"row",  
    },
    lessButton:{
    width: '60%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'maroon',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,

    },
    greaterButton:{
        width: '60%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'maroon',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        margin:10,
        marginLeft:50,
    
    },
    resetButton:{
        width:70,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'maroon',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        margin:10,
       
    },
    textInputName: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 300,
    
        marginHorizontal: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 20,
         margin:10,
    
    },
    textInputAge: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 300,
      
        marginHorizontal: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 20,
         margin:10,
    },
    searchBar:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 300,
        marginHorizontal: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 20,
        margin:510,
        
       
    
    },
    textBase:{
        fontSize:50,
        marginLeft:0,
         margin:520,
        backgroundColor:"white",
        borderRadius:100,
width:70,
textAlign:"center",
       
        // marginLeft:400,
    },
    Search:{
        flex:1,
        flexDirection:"row",
    },
    Bin:{
        flex:1,
    }
    
})
export default Filter;