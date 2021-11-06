import React, { useState } from 'react';

import HeaderBack from '../components/HeaderBack';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  Button,
  TextInput,
} from 'react-native';

export default function InputScreen({ navigation,route }) {

  return (
    <View style={styles.container}>
        <Text>Новый клиен</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  }
});
