import { StatusBar } from 'expo-status-bar';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useEffect, useState } from 'react';
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

  // хуки изменения поля ввода имени клиента
  //const [nameNewClient, onChangeClientName] = useState(null);
  //  const [surnameNewClient, onChangeClientSurname] = useState(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Директор', value: 'директор' },
    { label: 'Дворник', value: 'дворник' },
    { label: 'CEO', value: 'ceo' },
    { label: 'CTO', value: 'cto' },
  ]);



useEffect(() => {
  //const t  = value === undefined ? currentClients : '2323'
  const newFilteredClients = currentClients.filter(client => client.position === value);
  // с отображением всех в самом начале
  setFilteredClients(value === undefined || value === null ? currentClients : newFilteredClients );
}, [value])
  

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
      position:"директор"
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
      position:"дворник"
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
      position:"директор"
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
      position:"дворник"
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
      position:"cto"
    },
  ];

  const  array = [1,2,3,4,5];
  for(let i=0;i<array.length; i++) {
    console.log('index',i);
    const element = array[i]
    console.log('index',element);
  }

  // !!!хуки добавления клиента
  const [newClientObj, setClientObj] = useState(currentClients);
  const [filteredClients, setFilteredClients] = useState(currentClients);

  // ---- функция добавления клиента
  /*  const addNewClient = () => {
 
     //новый клиент
   let newClient = {
       name: " ",
       surname: " ",
       fathername: " ",
       phone: " ",
       card: " ",
       blocked: " ",
       coupons: " ",
       takedCoupons: "0",
       age: "NA",
     };
     // добавляем нового клиента к текущим клиентам
     return (
       setClientObj([...newClientObj, newClient])
     )
   }; */

  // функция, которая вызывается в InputScreen и передается в него по кнопке Add Client
  let newClient = {
    name: " ",
    surname: " ",
    fathername: " ",
    phone: " ",
    card: " ",
    blocked: " ",
    coupons: " ",
    takedCoupons: " ",
    age: " ",
  }
  let onAddNewClient = (newClient) => {
    return (
      setClientObj([...newClientObj, newClient])
    )
  }

  const renderItem = ({ item }) => {
    let cardColor = 'purple';
    let blColor = 'grey';
    return (
      /* передаем данные клиентов на  экран InfoScreen*/
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
      <DropDownPicker style={styles.picker}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <FlatList data={filteredClients} renderItem={renderItem} />

      <Button title="ADD CLIENTS IN NEW SCREEN" onPress={() => {
        return navigation.navigate('InputScreen', { onAddNewClient })
      }} />

      <Button title="DEBUG: SHOW CLIENTS" onPress={() => {
        console.log(newClientObj)
      }} />
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
  },picker: {
    padding:20,
    backgroundColor: 'yellow',
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
