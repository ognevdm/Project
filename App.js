import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ClientsScreen from "./src/screen/ClientsScreen";
import InfoScreen from "./src/screen/InfoScreen";
import InputScreen from "./src/screen/InputScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name ='ClientsScreen' component ={ClientsScreen} />
      <Stack.Screen name ='InputScreen' component ={InputScreen} />
      <Stack.Screen name ='InfoScreen' component ={InfoScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   // justifyContent: 'center',
  },
});
