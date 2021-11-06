import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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

import GreyButton from '../components/GreyButton';
import Header from '../components/Header';

export default function ClientsScreen({ navigation }) {
  {
    /* массив*/
  }
  //const clients = ['Иван Иванов', 'Василий Петров', 'Сергей Сидоров'];
  //const client = 'Иван Иванов';



  const [title, setTitle] = useState('CURRENT TITLE');
  const newTitle = 'NEW TITLE';


  // хуки изменения поля ввода имени клиента
  const [nameNewClient, onChangeClientName] = useState(null);
  const [surnameNewClient, onChangeClientSurname] = useState(null);

  const currentClients = [
    {
      name: 'Иван',
      surname: 'Иванов',
      fathername: 'Иванович',
      phone: '8-909-303-22-11',
      card: '100500',
      blocked: true,
      coupons: 11,
      takedCoupons: 3,
      age: 45,
    },
    {
      name: 'Сергей',
      surname: 'Серов',
      fathername: 'Сергеевич',
      phone: '8-101-102-33-15',
      card: '3333 2222 5566',
      blocked: false,
      coupons: 6,
      takedCoupons: 4,
      age: 10,
    },
    {
      name: 'Александр',
      surname: 'Пушкин',
      fathername: 'Сергеевич',
      phone: '8-011-122-33-66',
      card: '1111 0011 0022',
      blocked: false,
      coupons: 25,
      takedCoupons: 10,
      age: 40,
    },
    {
      name: 'Василий',
      surname: 'Петров',
      fathername: 'Попович',
      phone: '8-011-122-33-66',
      card: '1111 0011 0022',
      blocked: true,
      coupons: 3,
      takedCoupons: 7,
      age: 60,
    },
    {
      name: 'Вадим',
      surname: 'Петров',
      fathername: 'Попович',
      phone: '8-011-122-33-66',
      card: '1111 0011 0022',
      blocked: true,
      coupons: 0,
      takedCoupons: 1,
      age: 22,
    },
  ];


  // хуки добавления клиента
  const [newClientObj, setClientObj] = useState(currentClients);

  // функция добавления клиента
  const addNewClient = () => {
    setClientObj([...newClientObj,
    {
      name: nameNewClient,
      surname: surnameNewClient,
      fathername: ' ',
      phone: ' ',
      card: '0000',
      blocked: true,
      coupons: 0,
      takedCoupons: 0,
      age: 0,
    }]
    );
    console.log(newClientObj);
  };

  const renderItem = ({ item }) => {
    let cardColor = 'purple';
    let blColor = 'black';
    if (item.age < 20) {
      blColor = 'green';
    } else if (item.age >= 20 && item.age <= 40) {
      blColor = 'red';
    } else {
      blColor = 'pink';
    }
    if (item.age === 20 || item.age === 40) {
      blColor = 'yellow';
    }

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('InfoScreen', { client: item })}>
        {/* передаем цвет в компоненту*/}
        <GreyButton
          blockColor={blColor}
          title={item.name + ' ' + item.surname}
        />
      </TouchableOpacity>
      
    );
  };
  return (
    <View style={styles.container}>
      <Header />
      <Text>{title}</Text>
      <FlatList data={newClientObj} renderItem={renderItem} />

   {/*  
   !блок ввода имени и фамилии
   <TextInput
        style={styles.textInput}
        onChangeText={onChangeClientName}
        value={nameNewClient}
      />
      <Text style={styles.text} >Введите фамилию нового клиента</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeClientSurname}
        value={surnameNewClient}
      /> */}

    <Button title="Add client" onPress={() => {
      return navigation.navigate('InputScreen');
    }}/>

    </View>
  
  
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'grey',
    borderWidth: 2,
    width: '80%',
    margin: 10,
    alignSelf: 'center',
  },
  text: {
    width: '80%',
    alignSelf: 'center',
    margin: 5,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  button: {
    width: '100%',
    paddingLeft: 20,
  },
});
