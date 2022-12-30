import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet , SafeAreaView, Image,Button,TextInput} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import {supabase} from './api/supabase'
// You can import from local files

// or any pure javascript modules available in npm

import { useFonts, Poppins_400Regular,Poppins_600SemiBold,Poppins_300Light,Poppins_200ExtraLight } from '@expo-google-fonts/poppins';

export default function Email({navigation}){
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
        const { error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })
    
        if (error) Alert.alert(error.message)
        setLoading(false)
      }
    
      async function signUpWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signUp({
          email: email,
          password: password,
        })
    
        if (error) Alert.alert(error.message)
        setLoading(false)
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
style={{backgroundColor:'whitesmoke',width:250,margin:10,
height:45,borderRadius:2,borderWidth:0.5,padding:8,letterSpacing:3}}
value={email}
onChangeText={email => setEmail(email)}
/>
<TextInput
placeholder="Password"
multiline={false}
style={{backgroundColor:'whitesmoke',width:250,margin:8,
height:45,borderRadius:2,borderWidth:0.5,padding:8,letterSpacing:3}}
value={password}
onChangeText={(password) => {
setPassword(password)
}}
/></View>
 
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
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
  