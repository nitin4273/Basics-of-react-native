import React,{useState} from "react";
import {View,Text,TextInput,StyleSheet,Button, FlatList} from "react-native";
const Textinput=()=>{
    const [todos,setTodos]=useState([
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
    
    ]);
    const [text,setText]=useState("");
    const changeHandler = (val)=>{

    }
    return(
        
        <View style={styles.Container}>
<Text style={styles.textBase}>
    Name
</Text>
    
 {/* <Text style={styles.textBase}>
    Age
    </Text> */}
    <TextInput 
    style={styles.textInput}
    placeholder="player Name"
    onChangeText={changeHandler}
     /> 
    {/* //  <Button text="add player" color='coral'/> */}
<FlatList 
data={todos}
renderItem={({item}) =>(

<Text style={styles.textBase}>{item.name}</Text>
)}/>
</View>
    )
}
const styles= StyleSheet.create({
    Container:{
        backgroundColor:"white",
        flex:1,
    },
    textBase:{
        fontSize:20,
        justifyContent:"center",
        alignContent:'center',
        alignItems:"center",
        padding:10,
    },
    textInput:{underlineColorAndroid:'#FF5B00',
        borderWidth:1,
        borderColor:"black",
        width:200,
      marginHorizontal:10,
    },
   ListText:{
    margin:20,
    fontSize:20,
    backgroundColor:"red",
   }
})
export default Textinput;
