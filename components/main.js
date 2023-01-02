import { getAuth } from "firebase/auth";
import {app} from './api/firebase'
import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet , SafeAreaView, Image,Button,TextInput} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Main ({navigate}){
const auth = getAuth(app);
const user = auth.currentUser;
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
console.log(user)
} else {
  // No user is signed in.
}
    return(
        <SafeAreaView style={{  paddingTop: Constants.statusBarHeight,backgroundColor:'white',width:'100%',
        height:'100%'
        }}>
            <View>
                 <Text>Welcome, {user.email}</Text>
                 <Button >Sign out</Button>
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
})