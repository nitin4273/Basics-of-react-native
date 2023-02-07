import React from 'react';
import { StyleSheet ,View} from "react-native";
import {  WebView  } from 'react-native-webview';
const Webview=(navigation)=>{
//   const  onNavigationStateChangeHandler = ()=>{
//         alert(1);
//     }
    return(
        
            <WebView 
        //    source={{ uri: 'https://colorhunt.co/' }} 
         source={{ uri: 'https://www.fnp.com/' }} 
          style={{margin:20}}
        //   ref={r=>(this.webref=r)}
        //   onNavigationStateChange={this.onNavigationStateChangeHandler()}
        />
        // <WebView 
        //      Source={{uri:"http://www.apelosurgentes.com.br/en-us/" }}
        //      LoadCompleted="WebView_LoadCompleted" />

    )
}
const styles = StyleSheet.create({

})
export default Webview;