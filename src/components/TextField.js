import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity,Alert } from 'react-native';

export default function TextsField({textTitle,textContent,cardColor}) {
  return (
<View>
            <View style={styles.field}>
              <Text style ={styles.fieldTitle}>{textTitle}</Text>
              <Text style ={[styles.fieldContent, {color:cardColor}]}>{textContent}</Text>
            </View>

</View>
  );
}

const styles = StyleSheet.create({
   field: {
// backgroundColor:"yellow",
 paddingLeft:17,
 paddingTop:12,
 paddingBottom:12
 //flex:1
  },
 fieldTitle: {
  fontSize:12,
  fontWeight:'500',
  color:"grey",
  fontFamily:"SF"
  },
  fieldContent: {
  fontSize:16,
  fontWeight:'400',
  color:"black"
  }
});
