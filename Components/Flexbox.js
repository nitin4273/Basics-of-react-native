import React from 'react';
import {View, Text, Input, StyleSheet} from 'react-native';
const Flexbox = () => {
  return (
    <View style={styles.CointainerOne}>
      <Text style={styles.blockOne}>
        Header
        </Text>
    
    <View style={styles.main}>
      <Text style={styles.blockTwo}>
        Left Side Bar
        </Text>

      <Text style={styles.blockThree}>
        Center
        </Text>

      <Text style={styles.blockFour}>
        Right Side Bar
        </Text>
     </View>
      <Text style={styles.blockFive}>
        Footer
        </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  CointainerOne: {
    flex: 1,
    backgroundColor: 'white',
    margin:10,
    // height: '100%',
    // width:'100%',
    //flexDirection:"row",
    // flexDirection: 'column',
    //flexDirection:"column-reverse",
    //flexDirection:"row-reverse",

    // alignitems: 'center',

    // justifyContent: 'center',
    // justifyContent:"space-between",
   // justifyContent:"space-around",
    // justifyContent: 'space-evenly',
   // justifyContent:"flex-start",
    //justifyContent:"flex-end",
  },
  main:{
    flex: 1,
    flexDirection: "row",
    margin:10,
    textAlign:"center",
    
  },
  blockOne: {
    flex: 0.2,
    backgroundColor: 'cyan',
    //  width:60,
    //  height:60,
    alignSelf: 'stretch',
    fontSize: 30,
    // textAlign:"center",
  },
  blockTwo: {
    flex: 6,
    backgroundColor: 'yellow',
     textAlign:"left",
    fontSize: 30,
  
  },
  blockThree: {
    flex: 6,
    backgroundColor: 'green',
    // width:60,
    // height:60,
     textAlign: 'center',
    fontSize: 30,
    // height: '50%',
  },
  blockFour: {
    flex: 5,
    backgroundColor: 'red',
    // width:60,
    // height:60,
     textAlign: 'center',
//    flexDirection:"column-reverse",
    fontSize: 30,

  },
  blockFive: {
    flex: 0.2,
    backgroundColor: 'orangered',
    fontSize: 30,
    // alignItems: 'center',
    // // width:60,
    // // height:60,
    // textAlign: 'auto',
    // elevation: 10,
    
    // height: '80%',
  },
});
export default Flexbox;
