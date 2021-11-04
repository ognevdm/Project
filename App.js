import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FirtScreen from "./src/screen/FirtScreen";
import SecondScreen from "./src/screen/SecondScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator ();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name ='FirtScreen' component ={FirtScreen} />
        <Stack.Screen name ='SecondScreen' component ={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
