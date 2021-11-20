import React, { useReduser,useState } from 'react';

import HeaderBack from '../components/HeaderBack';
import Counter from '../components/Counter';


import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
  TextInput,
} from 'react-native';

export default function InputScreenReduser({ navigation, route }) {

  const onAddNewClient = route.params.onAddNewClient

  // задаем первоначальное значение объекта "клиент"
  const initialValue = {
    nameNewClient: '',
    surenameNewClient: '',
    fathernameNewClient: '',
    phoneNewClient: '',
    cardNewClient: '',
    blockedNewClient: '',
    couponsNewClient: '',
    takeCouponsNewClient: '',
    ageNewClient: '',
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'nameNewClient':
        return { ...state, nameNewClient: action.payload };
      case 'surenameNewClient':
        return { ...state, surenameNewClient: action.payload };
      case 'fathernameNewClient':
        return { ...state, fathernameNewClient: action.payload };
      case 'phoneNewClient':
        return { ...state, phoneNewClient: action.payload };
      case 'cardNewClient':
        return { ...state, cardNewClient: action.payload };
      case 'blockedNewClient':
        return { ...state, blockedNewClient: action.payload };
      case 'couponsNewClient':
        return { ...state, couponsNewClient: action.payload };
      case 'takeCouponsNewClient':
        return { ...state, couponsNewClient: action.payload };
      case 'ageNewClient':
        return { ...state, ageNewClient: action.payload };
    }
  }
const [state, dispatch] = useReduser(reducer, initialValue)

  // хуки для полей ввода данных
  /*   const [nameNewClient, onChangeClientName] = useState();
    const [surenameNewClient, onChangeClientSurName] = useState();
    const [fathernameNewClient, onChangeClientFatherName] = useState();
    const [phoneNewClient, onChangeClientPhone] = useState();
    const [cardNewClient, onChangeClientCard] = useState();
    const [blockedNewClient, onChangeClientBlocked] = useState();
    const [couponsNewClient, onChangeClientCoupons] = useState();
    const [takeCouponsNewClient, onChangeClientTakedCoupons] = useState();
    const [ageNewClient, onChangeClientAge] = useState(); */


  return (
    <View styles={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <HeaderBack title="Новый клиент" />
      </TouchableOpacity>
      <Counter></Counter>
      <Text styles={styles.text}>Имя</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => dispatch({type:'nameNewClient',payload: text})}
        value={state.nameNewClient}
        placeholder={"Имя"}
      />
      <Text styles={styles.text}>Фамилия</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => dispatch({type:'surenameNewClient',payload: text})}
        value={state.surenameNewClient}
        placeholder={"Фамилия"}
      />

      <Text styles={styles.text}>Отчество</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => dispatch({type:'fathernameNewClient',payload: text})}
        value={state.fathernameNewClient}
        placeholder={"Отчество"}
      />
      <Text styles={styles.text}>Телефон</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={(text) => dispatch({type:'phoneNewClient',payload: text})}
        value={state.phoneNewClient}
        placeholder={"Телефон"}
      />

      <Text styles={styles.text}>Номер карты</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => dispatch({type:'cardNewClient',payload: text})}
        value={state.cardNewClient}
        placeholder={"Номер карты"}
      />
      <Text styles={styles.text}>Блокировка</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => dispatch({type:'blockedNewClient',payload: text})}
        value={state.blockedNewClient}
        placeholder={"Блокировка"}
      />

      <Text styles={styles.text}>Купоны</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => dispatch({type:'couponsNewClient',payload: text})}
        value={state.couponsNewClient}
        placeholder={"Купоны"}
      />

      <Text styles={styles.text}>Взятые купоны</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => dispatch({type:'takeCouponsNewClient',payload: text})}
        value={state.takeCouponsNewClient}
        placeholder={"Взятые купоны"}
      />

      <Text styles={styles.text}>Возраст</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={(text) => dispatch({type:'ageNewClient',payload: text})}
        value={state.ageNewClient}
        placeholder={"Возраст"}
      />

      <Button title="SAVE" onPress={() => {
        //return navigation.goBack({onAddNewClient = {}});


        onAddNewClient(state);

        if (nameNewClient == undefined || surenameNewClient == undefined) {
          Alert.alert("1")
        }
        else {
          navigation.goBack();
        }
      }}

      />
      <Button title="DEBUG: SHOW onAddNewClient" onPress={() => {
        //return navigation.goBack({onAddNewClient = {}});
        onAddNewClient = {
          name: nameNewClient,
          surname: surenameNewClient,
          fathername: fathernameNewClient,
          phone: phoneNewClient,
          card: cardNewClient,
          blocked: blockedNewClient,
          coupons: couponsNewClient,
          takedCoupons: takeCouponsNewClient,
          age: ageNewClient
        }

        console.log(onAddNewClient)

      }} />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 2,
    width: '80%',
    margin: 10,
    alignSelf: 'center',
  },
  text: {
    backgroundColor: "red",
    alignSelf: 'center',
    margin: 10,

  },
});
