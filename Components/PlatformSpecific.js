import React from "react";
import {View,Text,StyleSheet,Platform} from "react-native";
// Check the version of Platform.
if (Platform.Version === 20) {
    console.log('Running on Nougat!');
  } else{
    // console.log("version not find");
  }
const PlatformSpecific=()=>{
    return(
        <View style={styles.Container}>
            <Text style={styles.textStyle}>
                Platform Specific
            </Text>
        </View>
    )
}
const styles=StyleSheet.create({
    textStyle:{
fontSize:50,
color:"white",
textAlign:"center",
alignSelf:"center",
justifyContent:"center",
fontWeight:"900",
backgroundColor:"#E97777",
margin:5,
    },
    Container:{
        flex:1,
        ...Platform.select({
            // It is Select the platform Itself and shoes the the styles according to platform. 
ios:{
    backgroundColor:"red",
},
android:{
    backgroundColor:"#FFDDD2",
},
default:{
    backgroundColor:"white",
}
        })
    }
});
export default PlatformSpecific;