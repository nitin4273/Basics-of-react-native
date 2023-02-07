import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      /* <View>
       
        <Text style={styles.description}> 
         Login Page
         </Text>
        </View> 

        <View>
      <Text style={styles.textBase}>
     Mobile Number
      </Text>
      </View>  
      
      <View style={styles.inputStyle}>
        <TextInput placeholder="📱Mobile No."
         keyboardType="numeric" />
      </View>

      <View style={styles.inputStyle}>
        <TextInput placeholder="🔒Password" />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotButton}>Not a member?</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity>
          <Text style={styles.skipButton}>SKIP</Text>
        </TouchableOpacity>
      </View>
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

  forgotButton: {
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
export default LoginPage;


