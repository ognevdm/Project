import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ClientsScreen from "./src/screen/ClientsScreen";
import InfoScreen from "./src/screen/InfoScreen";
import InputScreen from "./src/screen/InputScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combineReducers from './src/reducer';


const Stack = createStackNavigator();
const store = createStore(combineReducers);
export default function App({ navigation }) {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name ='ClientsScreen' component ={ClientsScreen} />
      <Stack.Screen name ='InputScreen' component ={InputScreen} />
      <Stack.Screen name ='InfoScreen' component ={InfoScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
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
