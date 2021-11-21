import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity,Alert } from 'react-native';

export default function Header({title}) {
  return (
<View>
            <View style={styles.headerLine1}></View>
                        <View style={styles.headerLine2}>
                              <Text style ={styles.titleTitleText}>{title}</Text>
                        </View>
                        
</View>
  );
}

const styles = StyleSheet.create({
 headerLine1: {
  backgroundColor:"#901414",
  height:24
  },
  headerLine2: {
  backgroundColor:"#BF2828",
  height:56,
 // justifyContent:"center",
  paddingLeft:16,
  shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 3,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 10,
  
  },  titleTitleText: {
  color:"white",
  fontWeight:'500',
  fontSize:20,
  fontFamily:'Roboto'
  }
});
