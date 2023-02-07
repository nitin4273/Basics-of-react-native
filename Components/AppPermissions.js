import React,{useState} from "react";
import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
const requestContactPermission = async () => {
    // const[permission,setPermission]=useState(false);
   
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: "Read Contacts Permission",
        message:
          "caller App needs access to your Contacts" +
          "so you can makes call to your loved one.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }

    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the caller App");
    } else {
      console.log("Call permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
  
 };
//  const permissionCheck = ContextCompat.checkSelfPermission(thisActivity, Manifest.permission.READ_CONTACTS);

const AppPermissions = () => (
  <View style={styles.container}>
    <Text style={styles.Text}>APP permissions</Text>
    <Button title="request permissions" onPress={requestContactPermission}
    style={styles.buttonStyle} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "gray",
   
  },
  Text: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonStyle:{
    backgroundColor:"white",
    margin:10,

  }
});

export default AppPermissions;