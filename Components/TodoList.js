import React ,{useState} from  "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from "react-native";
const TodoList=()=>{
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
    return(
<View style={styles.container}>
    {/* header*/}
    <View style={styles.header}>
    <Text style={styles.title}>  Indian Playing 11 </Text>
    </View>
    <View style={styles.content}>
    <TextInput 
    multiline
    style={styles.textInput}
    placeholder="change Player"
    onChangeText={changeHandler}

    />
    
<AddTodo/>
        <View style={styles.list}>
            
<FlatList 
data={todos}
renderItem={({item}) =>(

<Text style={styles.textBase}>{item.name}</Text>
)}
/>


        </View>
    </View>
</View>
    )
}
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"grey",
},
content:{
    padding:30,
},
list:{
    margin:10,
    padding:10,
},
header:{
  height:80,
  paddingTop:30,
  backgroundColor:"orange",
},
title:{
    fontSize:20,
    textAlign:"center",
    color:'white',
    fontWeight:"bold",
},
Touch:{
    padding:15,
    marginTop:15,
    borderColor:"black",
    borderWidth:1,
},
textBase:{
    padding:10,
    backgroundColor:"#CDF0EA",
    // backgroundColor:"pink",
        margin:10,}

})
export default TodoList;