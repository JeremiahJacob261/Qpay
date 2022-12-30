import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Image,Button ,SafeAreaView,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useFonts, Poppins_400Regular,Poppins_600SemiBold,Poppins_300Light,Poppins_200ExtraLight } from '@expo-google-fonts/poppins';

export default function Create({navigation}){
  const [phone,setPhone] = useState(0)
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_200ExtraLight
  });
  if (!fontsLoaded) {
    return null;
  }
  return(
    <SafeAreaView style={{flex:1,
    paddingTop: Constants.statusBarHeight,backgroundColor:'#FBFAF8'}}>
    <AntDesign name="close" size={24} color="black"style={{margin:10}} 
    onPress={() => navigation.navigate('/')}/>
   <View style={styles.container}>

 <Image 
            source={require('../assets/logo.jpg')}  
            style={{width: 50, height: 50}} 
          />
          <Text style={styles.texts}>
          Welcome To Qpay
          </Text>
          <Text style={{ fontFamily: 'Poppins_200ExtraLight',fontSize:13,
  margin:5}}>
          Use your Qpay number don't have one ? Try using Email .
          </Text>
          <View style={{ flexDirection: "row",width:'100%',justifyContent:'center',alignContent:'center'}}>
            <Text style={{textAlignVertical:'center',fontFamily:'Poppins_400Regular',margin:8,height:45,padding:8,textAlign:'center',borderRadius:2,borderWidth:0.5}}>+234</Text>
    <TextInput
placeholder="(000) 000000"
multiline={false}
keyboardType='phone-pad'
style={{backgroundColor:'whitesmoke',width:200,margin:8,
height:45,borderRadius:2,borderWidth:0.5,padding:8,letterSpacing:3}}
value={phone}
onChangeText={(p) => {
  if(p.length < 11){
setPhone(p)}
}}
/></View>
<View style={{ flexDirection: "row",width:'100%',padding:5,justifyContent:'center',alignItems:'center'}}>
<Text style={{ fontFamily: 'Poppins_200ExtraLight',fontSize:11,
  margin:2,flexShrink:1}}>You will be able to make transfers and keep your Account safe using this number.</Text>
<AntDesign name="infocirlce" size={24} color="black" />
</View>
<View style={styles.but}  onPress={() => navigation.navigate('/create')}>
     <Text style={styles.buttext}  onPress={() => navigation.navigate('/create')}>
    Receive OTP
     </Text>
     </View>
     <View style={styles.butw}>
     <Text style={styles.buttextw}  onPress={() => navigation.navigate('/email')}>
    Use Email To Sign Up
     </Text>
     </View>
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  but:{
    backgroundColor:'black',
    margin:5,
     width:'100%',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius:5,
      height:50
  },
  buttext:{
    color:'white',
     fontFamily: 'Poppins_400Regular',
     fontSize:12,
    padding:5,
    width:'100%',
    textAlignVertical: 'center',
    textAlign:'center',
    height:'100%'
  },
 container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FBFAF8',
    padding: 8,
 },
 texts:{
   color:'#747279',
   fontFamily:'Poppins_600SemiBold',
   margin:10,
   fontSize:20
 },
 butw:{
   backgroundColor:'white',
   padding:8,
   margin:5,
    width:'100%',
     justifyContent: 'center',
     alignItems:'center',
     borderRadius:5,
     height:50
 },
 buttextw:{
   color:'black',
    fontFamily: 'Poppins_400Regular',
    fontSize:12
 }
})