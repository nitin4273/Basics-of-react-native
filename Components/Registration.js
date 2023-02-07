import React from "react";
import {Text,View,SafeAreaView,StyleSheet, TextInput, TouchableOpacity} from "react-native";
const Registration=(navigation)=>{
    return(
        <SafeAreaView style={styles.Container}>
<Text style={ styles.headerText}> New User! </Text>
<Text style={styles.baseText}>Please Register Yourself</Text>
<TextInput
style={styles.Input}
placeholder="✍️UserName"/>

<TextInput 
style={styles.Input}
placeholder="🔒Set Password"/>

<TouchableOpacity style={styles.Button}>
    <Text style={styles.Register}>Register</Text>
</TouchableOpacity>
</SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Container:{
     flex:1,
     backgroundColor:"pink"
    },
    headerText:{
      fontSize:30, 

      textAlign:"center",
      padding:10,
      fontWeight:"bold",
     
    },
    baseText:{
        fontSize:25,
        justifyContent:"center",
        textAlign:"center",
      
    },
    Button:{
        backgroundColor:"white",
        width:100,
        alignItems:"center",
        justifyContent:"center",
        marginLeft:150,
        height:30,
    },
    Input:{
        backgroundColor: 'white',
        width: '80%',
        height: 45,
        borderColor: 'black',
        borderRadius:20,
        margin: 10,
        marginLeft: 30,
        textAlign:'center',
        fontSize:20,
    },
    Register:{
        fontSize:15,
        fontWeight:"bold"
    }
})
export default Registration;