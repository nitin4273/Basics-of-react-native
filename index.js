/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Store from"./Components/Store";
// import Store from"./Components/Store";

//   Store.subscribe(()=> console.log(Store.getState())); 
AppRegistry.registerComponent(appName, () => App);
