import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ClientsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Clients Screen</Text>
      <Button
        style={styles.button}
        title="Go to Clients Screen"
        color="black"
        onPress={() => navigation.navigate('InfoScreen')}>
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
