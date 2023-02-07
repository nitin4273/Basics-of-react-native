import React ,{useState} from "react";
import {View,Text, StyleSheet, TextInput,TouchableOpacity, ScrollView} from "react-native";
const Try=()=>{
    const [person,setPerson]=useState([
        {name:'1.Rohit(c)',key:'1'},
        {name:'2.Rahul(vc)',key:'2'},
        {name:'3.Virat🦁',key:'3'},
        {name:'4.SKY🔥',key:'4'},
        {name:'5.Hardik(🏏)',key:'5'},
        {name:'6.Dinesh(🧤 wk)',key:'6'},
        {name:'7.Axar(🏏)',key:'7'},
        {name:'8.Kumar',key:'8'},
        {name:'9.Shami',key:'9'},
        {name:'10.Arshdeep',key:'10'},
        {name:'11.Chahal',key:'11'},

    ])
    // const[player,setPlayer]=useState([{person:{person} ]}
    return(
       <View style={styles.Container}>
        <ScrollView>
<Text style={styles.textBase}>Player Name
</Text>
<TextInput style={styles.textInput}
placeholder="Player Name"
onChangeText={(val)=> setPlayer(val)}
/>
<Text style={styles.textBase}> Role</Text>
<TextInput style={styles.textInput}
placeholder="Role"
// keyboardType="numeric"
//  onChangeText={(val)=> (val)}
/>

<Text style={styles.textHead}>Indian Playing 11 For T20WC</Text>
{person.map(item =>(
    <View key = {item.key}>
      
        <Text style={styles.text}>{item.name}</Text>
       
        </View>
        
)

)}
</ScrollView>
       </View>
    )
}
const styles = StyleSheet.create({
Container:{
    flex:1,
    backgroundColor:"pink",
},
textBase:{
    fontSize:20,
    textAlign:"center",
   
    },
    textInput:{
        borderWidth:1,
        borderColor:"black",
        width:200,
      marginHorizontal:100,
      
    },
    textHead:{
        margin:10,
        fontSize:20,
        textAlign:"center",
    },
    text:{
        padding:20,
backgroundColor:"#CDF0EA",
// backgroundColor:"pink",
margin:20,

    },
})
export default Try;