import React,{useState} from "react";
import{View,Text,FlatList,StyleSheet} from "react-native";
const Flatlist= ({navigation})=>{
    const newLocal = '1.Rohit(c)';
    const [person,setPerson]=useState([
        {name:newLocal,key:'1'},
        {name:'2.Rahul(vc)',key:'2'},
        {name:'3.Virat🦁',key:'3'},
        {name:'4.SKY🔥',key:'4'},
        {name:'5.Hardik(🏏)',key:'5'},
        {name:'6.Dinesh(🧤)',key:'6'},
        {name:'7.Axar(🏏)',key:'7'},
        {name:'8.Kumar',key:'8'},
        {name:'9.Shami',key:'9'},
        {name:'10.Arshdeep',key:'10'},
        {name:'11.Chahal',key:'11'},

    ])
    return(
       <View>
        <Text style={styles.textInput}>India Team for Upcoming T20WC</Text>
        <FlatList
        // numColumns={2}
        data={person}
        renderItem={({item})=>(
            <Text style={styles.textBase}>{item.name}</Text>   
            ) }
        />
        
</View>
    )
    
}

const styles=StyleSheet.create({
    textInput:{
fontSize:20,
textAlign:"center",
    },
    Container:{
        flex:1,
    },
    textBase:{
padding:20,

 backgroundColor:"pink",
margin:20,
    },
})

export default Flatlist;