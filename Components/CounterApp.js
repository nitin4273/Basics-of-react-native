import React, {useState} from "react";
import{View,Text,StyleSheet,TouchableOpacity,Button} from "react-native";
const CounterApp=()=>{
    const[count,setCount]= React.useState(0);
    
return(
  <View style={styles.continer}>
    <Text style={styles.textBase}>
        Counter App
        </Text>
    <Text style={styles.counterText}>
        {count}
        </Text>
        <View style={styles.incrementbuttonContainer}>
           
    <Button 
    title="➕ Increment"
    onPress={()=>{
        (count<9) && setCount(count+1)}}/>
    </View>
    <View style={styles.decrementbuttonContainer}>
    <Button
      title="➖ Decrement"
    onPress={()=>{
         (count>0) && setCount(count-1)}}/>
    </View>
    <View style={styles.resetbuttonContainer}>
    <Button onPress={()=>{setCount(0)}}
    title="Reset"/>
    </View>
    
  </View>
)
} 
const styles=StyleSheet.create({
     continer:{
        flex:1,
        justifyContent:"center"
        ,alignItems:"center",
        backgroundColor:"steelblue",
    },
    textBase:{
        fontSize:40,
        color:"white",
        backgroundColor:"black",
    },
    counterText:{
        fontSize:100,
        color:"white",
    },
    incrementbuttonContainer:{
        margin:5,
        padding:10,
        // flexDirection:"column-reverse",
        // flex:0.1,
        // fontSize:30,
    },
    decrementbuttonContainer:{
        margin:5,
       
    },
    resetbuttonContainer:{
        margin:5,
        width:120,
        
       
    }

})


export default CounterApp;