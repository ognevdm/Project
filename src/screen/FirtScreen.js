import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function FirtScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>FirtScreen</Text>
      <Button
        style={styles.button}
        title="Go to next page"
        color="black"
        onPress={() => navigation.navigate('SecondScreen')}>
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
