/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState,useEffect} from 'react';
 import {
   StatusBar,
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
   ActivityIndicator
 } from 'react-native';

 export default function Login(props){
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [spinner, setSpinner] = useState(false);
   const [isVarified, setIsVarified] = useState("");
  // const {clickHandler} = props;
  //  useEffect(() => {
  //   console.log(props.key);
  // });
 
   var SharedPreferences = require('react-native-shared-preferences');
   const loginHandler =()=> {
    //props.clickHandler(true);
   // alert(101);
    
     if(email && password){
      validate(email,password);
     }else{
       alert("Please check email and password!");
     }
    
    //  setInterval(() => {
    //   setSpinner(false);
    //   props.clickHandler(true);
    //   setEmail("");
    //   setPassword("");
    // }, 20000);
   
    
   };
   const getValueHandler =()=> {
    SharedPreferences.getItems(["email","password"], function(values){
      console.log(values);
    });
   };

   const validate = (email,pass) => {
    console.log(email);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      console.log("Email is Not Correct");
      setEmail("");
      setPassword("");
      setIsVarified("Please type valid email!");
      return false;
    }
    else {
      setSpinner(true);
        SharedPreferences.setItem("email",email);
        SharedPreferences.setItem("password",password);
        const timer = setTimeout(()=> {
          setSpinner(false);
          props.clickHandler(true);
          setEmail("");
          setPassword("");
          alert("successfully login");
        },15000);
        return () => {
          clearTimeout(timer);
        }
     
     // setEmail({ email: x });
     // setIsVarified("Email is Correct");
      //console.log("Email is Correct");
    }
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
      <Text style={{color:"red"}}>{isVarified}</Text>
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

      <View style={{justifyContent: 'center', alignItems: 'center',position:'absolute',top:0,bottom:0,left:0,right:0}}>
        {
          spinner &&
          <ActivityIndicator  color={'red'} />
        }
        </View>
      
      <TouchableOpacity style={styles.loginButton} onPress={loginHandler}>
        <Text style={styles.loginText}>Login</Text>
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
 