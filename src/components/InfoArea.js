import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity,Alert } from 'react-native';

export default function InfoArea({areaColor,areaTitle,areaContent,style,styleTitle,styleContent,couponColor}) {
  return (
<View>
            <View style={[styles.infoArea, style]}>
                <Text style ={[styles.fieldTitle, styleTitle]}>{areaTitle}</Text>
                <Text style ={[styles.fieldContent, styleContent,{color:couponColor}]}>{areaContent}</Text>
            </View>

</View>
  );
}



const styles = StyleSheet.create({
  infoArea:{
    backgroundColor:"#52CC52",
    height:50,
     paddingLeft:17,
    // paddingTop:8,
     marginTop:4,
     justifyContent:"space-evenly"
  },
   fieldTitle: {
  fontSize:12,
  fontWeight:500,
  color:"white"
  },
  fieldContent: {
  fontSize:16,
  fontWeight:400,
  color:"white"
  }
});
