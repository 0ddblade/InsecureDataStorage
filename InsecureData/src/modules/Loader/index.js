/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import {
   StatusBar,
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
   ActivityIndicator
 } from 'react-native';


 export default function Home(){
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [spinner, setSpinner] = useState(false);
 
   const loginHandler =()=>{

   };
   const getValueHandler =()=>{

   }
   return(
     <View style={styles.mainContainer}>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput}
        placeholder="Enter Email"
        placeholderTextColor="#778899"
        onChangeText={(email) => setEmail(email)}
        value={email}/>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput}
        placeholder="Enter Password"
        placeholderTextColor="#778899"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        value={password}/>
      </View>

      <View style={styles.inputView}>
        <TextInput style={styles.textInput}
        placeholder="Enter Password"
        placeholderTextColor="#778899"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        value={password}/>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput}
        placeholder="Enter Password"
        placeholderTextColor="#778899"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        value={password}/>
      </View>
 
      <TouchableOpacity onPress={getValueHandler}>
        <Text style={styles.forgotButton}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton} onPress={loginHandler}>
        <Text style={styles.loginText}>Transfer</Text>
      </TouchableOpacity>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   mainContainer:{
     flex:1,
     backgroundColor:"#fffaf0",
     alignItems: "center",
     justifyContent:"center"
   },
   inputView:{
     backgroundColor:"#ffffff",
     borderRadius:20,
     borderColor:"#778899",
     borderWidth:1,
     width:"70%",
     height: 45,
     marginBottom: 20,
     alignItems:"center"
   },
   textInput:{
     height:50,
     flex:1,
     padding:10,
     marginLeft:10,
   },
   forgotButton:{
     height:30,
     marginBottom:30
   },
   loginButton:{
     width:"80%",
     borderRadius:25,
     height:50,
     alignItems:"center",
     justifyContent:"center",
     marginTop:40,
     backgroundColor:"#778899"
   },
   loginText:{
     color:"#ffffff",
     fontWeight:"bold"
   }
 })
 