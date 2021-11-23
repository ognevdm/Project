import React, { useState } from 'react';

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

export default function InputScreen({ navigation, route }) {

  const onAddNewClient = route.params.onAddNewClient


  // хуки для полей ввода данных
  const [nameNewClient, onChangeClientName] = useState();
  const [surenameNewClient, onChangeClientSurName] = useState();
  const [fathernameNewClient, onChangeClientFatherName] = useState();
  const [phoneNewClient, onChangeClientPhone] = useState();
  const [cardNewClient, onChangeClientCard] = useState();
  const [blockedNewClient, onChangeClientBlocked] = useState();
  const [couponsNewClient, onChangeClientCoupons] = useState();
  const [takeCouponsNewClient, onChangeClientTakedCoupons] = useState();
  const [ageNewClient, onChangeClientAge] = useState();


  return (
    <View styles={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <HeaderBack title="Новый клиент" />
      </TouchableOpacity>
      <Counter></Counter>
      <Text styles={styles.text}>Имя</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeClientName}
        value={nameNewClient}
        placeholder={"Имя"}
      />
      <Text styles={styles.text}>Фамилия</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeClientSurName}
        value={surenameNewClient}
        placeholder={"Фамилия"}
      />

      <Text styles={styles.text}>Отчество</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeClientFatherName}
        value={fathernameNewClient}
        placeholder={"Отчество"}
      />
      <Text styles={styles.text}>Телефон</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={onChangeClientPhone}
        value={phoneNewClient}
        placeholder={"Телефон"}
      />

      <Text styles={styles.text}>Номер карты</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeClientCard}
        value={cardNewClient}
        placeholder={"Номер карты"}
      />
      <Text styles={styles.text}>Блокировка</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeClientBlocked}
        value={blockedNewClient}
        placeholder={"Блокировка"}
      />

      <Text styles={styles.text}>Купоны</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeClientCoupons}
        value={couponsNewClient}
        placeholder={"Купоны"}
      />

      <Text styles={styles.text}>Взятые купоны</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeClientTakedCoupons}
        value={takeCouponsNewClient}
        placeholder={"Взятые купоны"}
      />

      <Text styles={styles.text}>Возраст</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={onChangeClientAge}
        value={ageNewClient}
        placeholder={"Возраст"}
      />

      <Button title="SAVE" onPress={() => {
      

        const client = {
          name: nameNewClient,
          surname: surenameNewClient,
          fathername: fathernameNewClient,
          phone: phoneNewClient,
          card: cardNewClient,
          blocked: blockedNewClient,
          coupons: couponsNewClient,
          takedCoupons: takeCouponsNewClient,
          age: ageNewClient,
          position:"директор"
        }

        onAddNewClient(client);
        navigation.goBack();
      }}

      />

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
