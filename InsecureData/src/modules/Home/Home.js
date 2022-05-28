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
   Image,
   PermissionsAndroid
 } from 'react-native';
 import CheckBox from '@react-native-community/checkbox';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import * as RNFS from 'react-native-fs';

 export default function Home(props){
   const [name, setName] = useState("");
   const [accountNum, setAccountNum] = useState("");
   const [ifscCode, setIfscCode] = useState("");
   const [purpose, setPurpose] = useState("");
   const [isSelected, setSelection] = useState(false);
 
   const tranjectionHandler = async()=>{

   // https://blog.logrocket.com/using-axios-react-native-manage-api-requests/
    if(isSelected===true && name && accountNum && ifscCode && purpose){

      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);
      } catch (err) {
        console.warn(err);
      }
      const readGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE); 
      const writeGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      if(!readGranted || !writeGranted) {
        console.log('Read and write permissions have not been granted');
        return;
      }
      var path = `${RNFS.ExternalStorageDirectoryPath}/MyTesting`;
      RNFS.mkdir(path);
      path += '/data.json';
      let Acc_Detail= {name,accountNum,ifscCode,purpose}
      RNFS.writeFile(path, JSON.stringify(Acc_Detail), 'utf8')
        .then((success) => {
          //console.log('Success');
          alert('successfully transfer!')
        })
        .catch((err) => {
         // console.log(err.message);
          alert('err.message');
        });
        // setName(name);
        // setAccountNum(accountNum);
        // setIfscCode(ifscCode);
        // setPurpose(purpose);
      alert("Process succesfully done.")

    }else{
      //alert(name+" /"+accountNum+" /"+ifscCode+" /"+purpose);
      if(name && accountNum && ifscCode && purpose){
        alert("Process succesfully done.");
        clearData();
      }else{
        clearData();
        alert('Please fill all details!');
      }
 
    }

    // try{
    //   const key = await AsyncStorage.setItem('Account_number', '0754329827337')
    //   alert('Data successfully saved');
    // }catch(e){
    //   alert('Failed to save the data to the storage');
    // }

   // const key = await AsyncStorage.getItem('STORAGE_KEY');
  // alert(key);
    // if(isSelected===true){
    //   alert("Process succesfully done.")
    // }
   // await AsyncStorage.clear()
   };

   const clearData = () => {
    setName("");
      setAccountNum("");
      setIfscCode("");
      setPurpose("");
  }

   const rememberMeHandler =(isclicked) =>{
    setSelection(isclicked)
   // console.log('REsult--------------0');
   // console.log(isclicked);
   }

   const StorageDataViewHandler = async()=>{
      try{
        const key = await AsyncStorage.getItem('Account_number');
     //  const key = await AsyncStorage.getAllKeys();
        alert(key);
      }catch(e){
        alert('Failed to fetch the data from storage');
      }
   }

   const StorageDataClearHandler = async()=>{
    try{
      await AsyncStorage.clear();
      clearData();
      alert('Storage successfully cleared!');
    }catch(e){
      alert('Failed to clear the storage.');
    }
   }

   const logoutHandler =()=>{
    props.clickHandler(false);
   }

   return(
     <View style={styles.mainContainer}>
       <Text style={{marginBottom:30,color:'#778899',fontWeight:'bold',fontSize:20}}>Receiver’s Account Detail</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput}
        placeholder="Name"
        placeholderTextColor="#778899"
        onChangeText={(name) => setName(name)}
        value={name}/>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput}
        placeholder="Account No."
        placeholderTextColor="#778899"
        onChangeText={(accountNum) => setAccountNum(accountNum)}
        value={accountNum}/>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput}
        placeholder="IFSC Code"
        placeholderTextColor="#778899"
        onChangeText={(ifscCode) => setIfscCode(ifscCode)}
        value={ifscCode}/>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput}
        placeholder="Purpose"
        placeholderTextColor="#778899"
        onChangeText={(purpose) => setPurpose(purpose)}
        value={purpose}/>
      </View>
 
      <View style={{flexDirection:'row'}}>
      <CheckBox
    disabled={false}
    value={isSelected}
    onValueChange={(newValue) => rememberMeHandler(newValue)}
  />
  <Text style={styles.forgotButton}>Remember me?</Text>
      </View>
      
      <TouchableOpacity style={styles.loginButton} onPress={tranjectionHandler}>
        <Text style={styles.loginText}>Transfer</Text>
      </TouchableOpacity>
<View style={{flexDirection: 'row', margin:20,width:'30%',justifyContent:'space-between', }}>
  <TouchableOpacity onPress={StorageDataViewHandler}>
  <Image style={{height:20, width:20}} source={require('../../images/view_data.png')}/>
  </TouchableOpacity>

<TouchableOpacity onPress={StorageDataClearHandler}>
  <Image style={{height:20, width:20,}} source={require('../../images/clear_storage.png')}/>
</TouchableOpacity>

</View>

<TouchableOpacity onPress={logoutHandler}>
  <Image style={{height:20, width:20,}} source={require('../../images/shutdown.png')}/>
</TouchableOpacity>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   mainContainer:{
     flex:1,
     backgroundColor:"#fffaf0",
     alignItems: "center",
     justifyContent:"center",
     width:'100%'
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
     marginBottom:30,
     textAlignVertical:'center'

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
 