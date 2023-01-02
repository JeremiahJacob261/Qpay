import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet , SafeAreaView, Image,Button,TextInput} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import {supabase} from './api/supabase'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,sendEmailVerification  } from "firebase/auth";
import {app} from './api/firebase'
// You can import from local files

// or any pure javascript modules available in npm
//npx cross-env NODE_OPTIONS=--openssl-legacy-provider expo start --web --offline
import { useFonts, Poppins_400Regular,Poppins_600SemiBold,Poppins_300Light,Poppins_200ExtraLight } from '@expo-google-fonts/poppins';

export default function Email({navigation}){
  const auth = getAuth(app);
      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')
      const [loading,setLoading] = useState(false)
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_300Light,
        Poppins_200ExtraLight
      });
      if (!fontsLoaded) {
        return null;
      }
      async function signInWithEmail() {
        setLoading(true)
        signInWithEmailAndPassword 
    
        if (error) {
          alert(error.message)
        setLoading(false)}
      }
    //aqnn
      async function signUpWithEmail() {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
    console.log("sent")
  });
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage)
        if (error) {
          alert(error.message)
        setLoading(false)}
  });
    
      }
    
    return(
        <SafeAreaView style={{  paddingTop: Constants.statusBarHeight,backgroundColor:'white'}}>
            <AntDesign name="close" size={24} color="black"style={{margin:10}} 
    onPress={() => navigation.navigate('/create')}/>
            <View style={styles.container}>
            <Image 
            source={require('../assets/logo.jpg')}  
            style={{width: 50, height: 50}} 
          />
          <View style={{padding:8}}> 
          <Text style={styles.texts}>
          Welcome To Qpay
          </Text>
          <TextInput
placeholder="Email"
multiline={false}
keyboardType='email-address'
style={{backgroundColor:'whitesmoke',width:250,margin:10,
height:45,borderRadius:2,borderWidth:0.5,padding:8,letterSpacing:1}}
value={email}
onChangeText={email => setEmail(email)}
/>
<TextInput
placeholder="Password"
multiline={false}
keyboardType='visible-password'
style={{backgroundColor:'whitesmoke',width:250,margin:8,
height:45,borderRadius:2,borderWidth:0.5,padding:8,letterSpacing:1}}
value={password}
onChangeText={(password) => {
setPassword(password)
}}
/>
<View style={styles.but}  onPress={() => navigation.navigate('/create')}>
     <Text style={styles.buttext}  onPress={() => {
      signUpWithEmail()
     }}>
  SignUp
     </Text>
     </View>
</View>
 
            </View>
        </SafeAreaView>
    )
    //5eqybdeg
}
const styles = StyleSheet.create({
  but:{
    backgroundColor:'black',
    margin:5,
     width:'100%',
      borderRadius:5
  },
  buttext:{
    color:'white',
     fontFamily: 'Poppins_400Regular',
     fontSize:12,
    padding:12,
    width:'100%',
    textAlignVertical: 'center',
    textAlign:'center',
    justifyContent:'center',
    height:'100%'
  },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'white',
      padding: 8,
      width:'100%',
      height:'100%'
    }, 
    texts:{
      color:'#747279',
      fontFamily:'Poppins_600SemiBold',
      margin:10,
      fontSize:20
    },
 
  });
  