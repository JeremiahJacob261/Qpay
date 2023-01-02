import * as React from 'react';
import { Text, View, StyleSheet , SafeAreaView, Image,Button} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import from local files

// or any pure javascript modules available in npm

import { useFonts, Poppins_400Regular,Poppins_600SemiBold,Poppins_300Light,Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
export default function Home({navigation}) {
   const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_200ExtraLight
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{flex:1,
    justifyContent: 'center',
    alignItems:'center'}}>
    <View style={styles.container}>
     <Text style={{ fontFamily: 'Poppins_600SemiBold',fontSize:25,
  margin:8 }}>
     Swift and Easy Payment.
     </Text>
 <Image 
            source={require('../assets/pic1.jpg')}  
            style={{width: 220, height: 200}} 
          />
           <Text style={{ fontFamily: 'Poppins_300Light',fontSize:13,
  margin:5 }}>
     By Proceeding I accept the terms for Qpay's Service and confirm that i have read Qpay's Policy
     </Text>
     <Text style={{ fontFamily: 'Poppins_200ExtraLight',fontSize:12 }}>
     Links in app are sponsored
     </Text>
     <View style={styles.but}  onPress={() => navigation.navigate('/create')}>
     <Text style={styles.buttext}  onPress={() => navigation.navigate('/create')}>
     Create Account
     </Text>
     </View>
      <View style={styles.butw}>
     <Text style={styles.buttextw}>
     Sign in
     </Text>
     </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F5A655',
    padding: 8,
    width:'100%'
  },
but:{
  backgroundColor:'black',
  margin:5,
   width:'100%',
    justifyContent: 'center',
    alignItems:'center',
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
  height:'100%'
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
});
