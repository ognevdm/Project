import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity,Alert } from 'react-native';

export default function GreyButton({title,blockColor}) {
  return (
     <View style={[styles.button,{backgroundColor:blockColor}]}>
                    <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
   button: {
  backgroundColor:"grey",
  height:52,
  width:"95%",
  justifyContent:"center",
  padding:16,
  marginTop:17,
  shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

elevation: 3,
  },
  buttonText: {
  color:"white",
  fontWeight:500,
  fontSize:16,
  fontFamily:'Roboto'
  }
});
