import React, { useState,setState } from "react";
import {  Text, View ,Button,StyleSheet} from "react-native";
// state 
const Basics = () => {
 const[name,setName]= useState("Nitin");
 // here me make an object and pass  some properties of person.
 const[person,setPerson]=useState({name:"rahul" ,age:23,profession:"Software Engineer"})
 const clickHandler = () =>{
    setName("harsh");
    setPerson({name:"nischint" ,age:23, profession:"Data Analasyt"});
 }
  const previousState= ()=>{
    // const[name,setName]=setState("Nitin");
    setName(" Nitin");
    // setPerson({name:"Yash" ,age:23, profession:"Data Analasyt"});
 }
  return (
    <View style={styles.container}>
      <Text style={styles.textBase}>
    Hey I am  {name}
      </Text>
      <Text style={styles.textBase}>
        My Friend name is {person.name} , his age is {person.age} and his profession {person.profession}
      </Text>
      <View style={styles.buttonContainer}>
      <Button title="Update state"
      onPress={clickHandler}/>
        </View>
         <View style={styles.buttonContainer}>
            <Button title=" previous state"
            onPress={previousState}/>
        </View> 
        </View>
  );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"coral",
        alignItems:"center",
        justifyContent:"center",
        margin:10,
       
    },
    buttonContainer:{
         margin:20,
         padding:20,
         backgroundColor:"cyan",
    },

    textBase:{
      fontSize:20,
      fontWeight:"bold",
      
    },
})

export default Basics;