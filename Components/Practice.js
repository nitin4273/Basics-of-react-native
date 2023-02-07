import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";
const Practice =()=>{
    return(
<View style={styles.Container}>
<Image source={{uri:'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'}} style={{height:100}} />
    <Text style={styles.textBaseOne}>
       Block 1 
    </Text>
<Image source={{uri:'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'}} style={{height:100}} />
    
<Text style ={styles.textBaseTwo}>
    Block 2
    
</Text>
<Image source={{uri:'https://unsplash.com/s/photos/lock-and-key'}} style={{height:100}}/>
<Text style ={styles.textBasethree}>
    Block 3
</Text>
<Text style={styles.textBaseFour}>
    Block 4
</Text>
<Text style={styles.textBaseFive}>
    Block 5
</Text>
</View>
    );
}
const styles =StyleSheet.create({
    Container:{
flex:1,
backgroundColor:"white",
    },
textBaseOne:{
    flex:1/5,
    backgroundColor:"red",
    alignItems: 'center',
    justifyContent:'center',
    textAlign:"center",
    margin:10,
},
textBaseTwo:{
    flex:1/5,
    backgroundColor:"blue",
    textAlign:"center",
    margin:10,
},
textBasethree:{
    flex:1/5,
    backgroundColor:"orange",
    textAlign:"center",
    margin:10,
},
textBaseFour:{
    flex:1/5,
    textAlign:"center",
    backgroundColor:"maroon",
    margin:10,
},
textBaseFive:{
    flex:1/5,
    backgroundColor:"cyan",
    textAlign:"center",
    margin:10,
}
});
export default Practice;