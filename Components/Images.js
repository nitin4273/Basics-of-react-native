import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
const Images=()=>{
    return(
<View style={styles.Container}>
<Text style={styles.textBase}>
    This is Image </Text>
    <Image  style={styles.inputImage}
    source={require("../Components/key.png")}/> 
      

<Image  style={styles.inputImageTwo}
    source={require("../Components/lock.jpeg")}/> 

<Image  style={styles.inputImageThree}
    source={require("../Components/lock.jpeg")}/> 



</View>
    )
}
const styles=StyleSheet.create({
    Container:{
       flex:1,
       backgroundColor:"#ddd"
        


    },
    textBase:{
        fontSize:20,
        justifyContent:"center",
        
        textAlign:"center",
    },
    inputImage:{
height:200,
 width:400,
 marginTop:20,
 marginVertical:20,
 
    },
    inputImageTwo:{
        height:100,
        width:150,
        borderRadius:500,
        marginTop:20,
    },
    inputImageThree:{
        marginTop:20,
        marginHorizontal:40,
    },
})
export default Images;
