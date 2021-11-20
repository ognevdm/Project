import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default class Example extends React.Component {

  state = {
    count:0,
    title:"Title1"
  }

increaseCounter = () => {
  this.setState({count:this.state.count +1});
}

  render() {
    return (
      <View>
        <Text>Нажали на кнопку 5 раз</Text>
        <Button title="Поменяй счетчик" onPress = {this.increaseCounter}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"white",
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
