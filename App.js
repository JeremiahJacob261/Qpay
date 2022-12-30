import React from 'react';
import { registerRootComponent } from 'expo';
//import all the components we are going to use
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Create from './components/Create';
import Email from './components/Email';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="/">
        <Stack.Screen
          name="/"
          component={Home}
          options={{ headerShown: false, headerTintColor: '#FF9F1C' }}
        />
        <Stack.Screen
          name="/create"
          component={Create}
          options={{ headerShown: false, headerTintColor: '#FF9F1C' }}
        />
        <Stack.Screen
          name="/email"
          component={Email}
          options={{ headerShown: false, headerTintColor: '#FF9F1C' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
