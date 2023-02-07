import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
  ImageBackground
} from 'react-native';
const url = 'http://www.youtube.com';
const url2 = 'https://www.whatsapp.com/';
const mail = 'nitinbsr609@gmail.com';
const image =  { uri: "https://reactjs.org/logo-og.png" };
const LinkingConcept = () => {
  const number = '+91 7535033503';
  const message = 'hello';

  const contact = 'Niiti';
  const openPhotos = () => {
    if (Platform.OS == 'android')
      Linking.openURL('content://media/internal/images/media');
    // } else if ( Platform.OS =='android'){
    // Linking.openURL('content://media/internal/images/media')
    // }
    else {
      Alert.alert("Can't Open Gallery");
    }
  };

  const openUrl =  url => {
   
   try{
   
      Linking.openURL(url);
    } catch(err) {
      Alert.alert(`Can't open this url:${url}`);
    }
  };
  return (

    <View style={styles.conatiner}>
      <Text style={styles.headText}>Linking Concept</Text>
      <TouchableOpacity
        onPress={() => {
          openUrl(url);
        }}>
        <Text style={styles.urlText}>Open URL</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`tel:$(number)`);
        }}>
        <Text style={styles.callText}>Call📞</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`sms:number=${number}?body=${message}`);
        }}>
        <Text style={styles.smsText}>Message ✍️</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(
            `mailto:support@me.com?subject=Testing&body=${message}`,
          );
        }}>
        <Text style={styles.mailText}>MAIL</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`http://www.youtube.com`);
        }}>
        <Text style={styles.youtubeText}>YOUTUBE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          openPhotos();
        }}>
        <Text style={styles.galleryText}>Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(
            `https://www.google.com/maps/search/?api=1&query=india`,
          );
        }}>
        <Text style={styles.mapText}>MAPS 🗺️ </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`https://www.whatsapp.com/`);
          // Linking.openURL(`whatsapp://send?phone=${contact}$text=${message}`)
        }}>
        <Text style={styles.waText}>WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`https://www.fnp.com/`);
          // Linking.openURL(`whatsapp://send?phone=${contact}$text=${message}`)
        }}>
        <Text style={styles.fnpText}>FNP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`https://www.facebook.com/`);
          // Linking.openURL(`whatsapp://send?phone=${contact}$text=${message}`)
        }}>
        <Text style={styles.fbText}>FACEBOOK</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#B6E388',
  },
  headText: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 30,
  },
  urlText: {
    fontSize: 20,
    backgroundColor: '#FFE9A0',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 90,
    textAlign: 'center',
    width: 200,
    height: 40,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  callText: {
    fontSize: 20,
    backgroundColor: '#E97777',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 90,
    textAlign: 'center',
    width: 200,
    height: 40,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  smsText: {
    fontSize: 20,
    backgroundColor: '#BCEAD5',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 90,
    textAlign: 'center',
    width: 200,
    height: 40,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  mailText: {
    fontSize: 20,
    backgroundColor: '#9F73AB',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 90,
    textAlign: 'center',
    width: 200,
    height: 40,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  youtubeText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#A3C7D6',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 90,
    textAlign: 'center',
    width: 200,
    height: 40,
    borderRadius: 20,
  },
  galleryText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#E26868',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 90,
    textAlign: 'center',
    width: 200,
    height: 40,
    borderRadius: 20,
  },
  mapText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#FFEBAD',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 90,
    textAlign: 'center',
    width: 200,
    height: 40,
    borderRadius: 20,
  },
  waText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#9F73AB',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 90,
    textAlign: 'center',
    width: 200,
    height: 40,
    borderRadius: 20,
  },
  fnpText:{
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 90,
    textAlign: 'center',
    width: 200,
    height: 40,
    borderRadius: 20,
  },
  fbText:{
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#DC5F00',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 90,
    textAlign: 'center',
    width: 200,
    height: 40,
    borderRadius: 20, 
  }
});
export default LinkingConcept;
