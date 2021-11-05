import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function InfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Info Screen</Text>
      <Button
        style={styles.button}
        title="Go back to main screen"
        color="black"
        onPress={() => navigation.navigate('ClientsScreen')}>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, button: {
    width: 200,
    height: 100
  },
});
