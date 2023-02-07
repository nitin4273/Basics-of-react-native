import React,{createContext} from "react";
import{Text,View,StyleSheet} from "react-native";
import webView from "./Components/WebView";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Store from "./Components/Store";

// import HomeLogin from"./Components/HomeLogin";
// import LoginPage from "./Components/LoginPage";
// import Basics from "./Components/Basics";
//  //import Practice from"./Components/Practice";
// import CounterApp from"./Components/CounterApp";
// import Flexbox from"./Components/Flexbox";
// import Images from"./Components/Images";
// import  Images  from "./Components/Images";
 import Textinput from"./Components/Textinput";

// import Registration from"./Components/Registration";
// import Nitin from "./Components/Nitin";
// import Try from "./Components/Try";
//  import TodoList from "./Components/TodoList";

// import Input from"./Components/Input";
// // import Filter from "./Components/Filter";
// import ListandScrollView from"./Components/ListandScrollView";
//  import Search from"./Components/Search";
//  import Login from "./Components/Login";
// import HomeLogin from "./Components/HomeLogin";
// import Flatlist from"./Components/Flatlist";
// import Registration from"./Components/Registration";
import Webview from "./Components/WebView";
   import WebView2 from"./Components/WebView2";
  import ApiCall from "./Components/ApiCall";
  import ReduxCounterApp from"./Components/ReduxCounterApp";
  import { Provider } from "react-redux";
  import BackgroundImage from "./Components/BackgroundImage";
import Linking from"./Components/Linking";
import AppPermission from "./Components/AppPermissions";
import PlatformSpecific from "./Components/PlatformSpecific";
// import AsyncStorage from "@react-native-async-storage/async-storage";
 import AsyncStorage from "./Components/AsyncStorage";
  import AsyncStorage2 from "./Components/AsyncStorage2";
// import AsyncStorage3 from "./Components/AsyncStorage3"
const Apps = () => {
     const Stack = createNativeStackNavigator();
  return(

  // <Basics/>
  // <Login/>
  // <LoginPage/>
  // <HomeLogin/>
   // <Practice/>
  // <CounterApp/>
  // <Flexbox/>
//  <Images/> 
/* <ToDoApp/> */
//  <Textinput/> 
//  <ListandScrollView/> 
//  <Flatlist/> 
//  <Nitin/> 
//  <Try/> 
//  <TodoList/> 
//  <Input/> 
//  <Filter/> 
//  <Search/>
//  <Webview/>  
//  <WebView2/> 
  // <ApiCall/>
//  <BackgroundImage/> 
  // <Linking/> 
//  <AppPermission/> 
//  <PlatformSpecific/>  
  <AsyncStorage/>
/* <ReduxCounterApp/> */
//  <AsyncStorage2/> 
/* <AsyncStorage3/> */
//   <NavigationContainer>
//  <Stack.Navigator initialRouteName="Login">
//  <Stack.Screen name="Login" component={Login}
//    options={{ title: 'Login ',
//    headerStyle:{
//    backgroundColor:"white",
//    }, 
//    headerTintColor: 'black',
//    headerTitleStyle: {
//     fontWeight: 'bold',
//   },
//    }}/>
// <Stack.Screen name ="HomeLogin" component={HomeLogin}
//   options={{ title: 'My Home' ,
//   headerStyle:{
// backgroundColor:"#DFF6FF",
// textAlign:"center",
//   }}}/>
  
//   <Stack.Screen name ="webView" component={webView}/>
// <Stack.Screen name ="flatList" component={Flatlist}
//   options={{ title: 'FlatList' 
//   }}/>
// <Stack.Screen name ="ListandScrollView" component={ListandScrollView}
//   options={{ title: 'ScrollView' }}
//   />
// {/* <Stack.Screen name =" Search" component={Search}
//   options={{ title: 'Search Bar' }}/> */}
// <Stack.Screen name ="Registration" component={Registration}
//   options={{ title: 'Registration Page' }}/>
//  </Stack.Navigator>
// //  </NavigationContainer>
//  <Provider store={Store}>  
// <ReduxCounterApp/>
// </Provider> 

  )
}
const Styles=StyleSheet.create({

});
export default Apps;