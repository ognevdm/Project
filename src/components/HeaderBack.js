import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity,Alert } from 'react-native';

export default function HeaderBack({title}) {
  return (
<View>
            <View style={styles.headerLine1}></View>
                         

            <View style={styles.headerLine2}>
                <Image style={styles.backImg} source = { require ('../../assets/arrow.png')}/>
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
  flexDirection:"row",
  backgroundColor:"#BF2828",
  height:56,
  justifyContent:"left",
   shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 3,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 10,
 // paddingLeft:16
  },  
  titleTitleText: {
  color:"white",
  fontWeight:500,
  fontSize:20,
  fontFamily:'Roboto',
  alignSelf:"center",
  marginLeft:15
  },
  backImg: {
  height:35,
  width:25,
  alignSelf:"center",
  marginLeft:15,
  opacity:1
  }
});
