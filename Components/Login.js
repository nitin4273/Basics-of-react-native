import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Icon
} from 'react-native';
import Registration from './Registration';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState("");
  // console.log(userName);
  const [password,setPassword] = useState("");
  // console.log(password);
   const[isSecureEntry,setISSecureEntry] = useState(isSecureEntry);
  const submit =()=>{
    // return Alert.alert(userName,password);
    if(userName === "nitin" && password === "1234"){
      Alert.alert(`Thank You ${userName},${password}`);
      navigation.navigate("HomeLogin",{myName: `${userName}`});
    }else{
      Alert.alert("Data not match");
    }
  }
// const Registration=()=>{
//   if(user)
// 
  return (
    <SafeAreaView style={styles.container}>
     <Image 
     style={styles.lockStyle}
     source={ require("../Components/lock.jpeg")}/>
      <View style={styles.inputStyle}>
        <TextInput placeholder="✍️UserName"
         value={userName}
         secureTextEntry={true }
         Icon={
          <TouchableOpacity
          onPress={()=>{
            setISSecureEntry((prev) => !prev);
          }}>
            <Text>{isSecureEntry ? 'show' : 'hide'}</Text>
          </TouchableOpacity>
         }
         onChangeText ={(actualData)=> setUserName(actualData)}
         />
      </View>

    
      <View style={styles.inputStyle}>
        <TextInput placeholder="🔒Password" 
       value={password}
       secureTextEntry={true}
       onChangeText={(actualData)=>setPassword(actualData)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}
      onPress={()=>submit()}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

<TouchableOpacity 
 onPress={()=>navigation.navigate ('Registration')}>
  <Text style={styles. newUserText} > New User? </Text>
</TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#66666666',
    alignItems:"center",
    fontSize:40,
    
  },
  lockStyle:{
width:100,
height:100,
borderRadius:50,
borderColor:"black",
alignItems:"flex-start",
  },
  description: {
    textAlign: 'center',
    height: 40,
    fontSize: 20,
  },
  textBase: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    backgroundColor: 'white',
    width: '95%',
    height: 45,
    borderColor: 'black',
    margin: 10,
    marginLeft: 10,
  },

  loginBtn: {
    width: '95%',
    marginLeft: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'blue',
  },
  loginText: {
    color: 'white',
    fontSize: 25,
  },

  newUserText: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
    fontSize:18,
  },

  skipButton: {
    textAlign: 'center',
    marginTop: 10,
    fontSize:15,
  
  },
});
export default Login;
