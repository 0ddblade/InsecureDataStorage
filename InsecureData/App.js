/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import {
   StyleSheet,
   View,
   LogBox
 } from 'react-native';
import Home from './src/modules/Home/Home';
import Login from './src/modules/Login';
LogBox.ignoreLogs(['Warning: ...']);

 export default function App(){
   const [isHome, setIshome] = useState(false);

   const clickHandler =(x)=>{
       setIshome(x);
     //alert('clicked');
   }
   return(
    <View style={styles.mainContainer}>
      {
        isHome===false? <Login clickHandler={clickHandler}/> :<Home clickHandler={clickHandler}/>
      }
    </View>
   );
 }
 
 const styles = StyleSheet.create({
   mainContainer:{
     flex:1,
     backgroundColor:"#fffaf0",
   },
 })
 