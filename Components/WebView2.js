import React from "react";
import {View,Text,StyleSheet} from "react-native";
import WebView from "react-native-webview";

const WebView2=()=>{
    const myHtml= `<html><body style="background-color:powderblue;">
    <h1 style="color:white; font-size:100px; text-align:center; font-family:verdana;"
    >Hello World</h1>
    <P style= "font-size:80px;">You can use this component to navigate back and forth in the web view's history and configure various properties for the web content.</p>
    </body></html>`
   return(
<WebView
source={{html: myHtml}}
/>

   ) 
}
const styles = StyleSheet.create({

})
export default WebView2;