import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import HeaderBack from '../components/HeaderBack';
import TextsField from '../components/TextField';
import InfoArea from '../components/InfoArea';
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

export default function InfoScreen({ navigation, route }) {
   /* переменная для передачи значений массива*/
const client = route.params.client;

  const {
    name,
    surname,
    fathername,
    phone,
    card,
    blocked,
    coupons,
    takedCoupons,
  } = client;

  let crdColor = 'purple';
  if (card === '100500')
  {
    crdColor = 'black'
  }
// если количество купонов 0 - красный, если меньше 4 - зеленый, если больше 10 - розовый, ////от 4 до 10 - голубой. если 50 и 25 - желтый
let cpnColor = 'black';
if (coupons<4)
{
cpnColor = 'green'
}
else if (coupons>10)
{
cpnColor = 'pink'
}
else if (coupons >= 4 && coupons <= 10 )
{
cpnColor = 'blue'
}
if (coupons === 0)
{
  cpnColor = 'red'
}
if (coupons === 50 ||coupons === 25  )
{
  cpnColor = 'yellow'
}

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <HeaderBack title="О клиенте" />
      </TouchableOpacity>
      <TextsField textTitle="Фамилия:" textContent={surname} />
      <TextsField textTitle="Имя:" textContent={name} />
      <TextsField textTitle="Отчество:" textContent={fathername} />
      <TextsField textTitle="Телефон:" textContent={phone} />
      <TextsField textTitle="Номер карты:" textContent={card} cardColor = {crdColor} />
      <InfoArea areaTitle="Клиент заблокирован?" areaContent={blocked} />
      <InfoArea
        areaTitle="Количество купонов в БД:"
        areaContent={coupons}
        couponColor = {cpnColor}
        style={{ backgroundColor: '#3098F2' }}
        styleContent={{ color: 'black' }}
        styleTitle={{ color: 'black' }}
      />
      <TextsField textTitle="Выдано на руки:" textContent={takedCoupons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"white",
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
