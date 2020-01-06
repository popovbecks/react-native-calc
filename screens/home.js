import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const billsArray = [];
  let getData = async () => {
    const DB = 'https://filmsonangular.firebaseio.com/bills.json';
    const Tarif = `https://filmsonangular.firebaseio.com/tarif.json`;
  let respAccount = await fetch(DB);
  let dataAccount = await respAccount.json();
  let respTarif = await fetch(Tarif);
  let dataTarif = await respTarif.json();
  for(const key in dataAccount) {
    billsArray.push({
      canalization: +dataAccount[key].canalization * +dataTarif.canaliz,
      coldWater: +dataAccount[key].cold,
      hotWater: +dataAccount[key].hot,
      electr: +dataAccount[key].electr,
      stove: +dataTarif.stove,
      internet: +dataTarif.internet,
      heating: +dataTarif.heating,
      month: dataAccount[key].month,
      date: dataAccount[key].date,
      key: key
    })
  }
  billsArray.forEach((item, index)=> {
    let hot = item[index - 1] ? item.hotWater - item[index - 1].hotWater * dataTarif.hot: (item.hotWater - +dataTarif.hotStart) * +dataTarif.hot;
    let cold = item[index - 1] ? item.coldWater - item[index - 1].coldWater * dataTarif.cold: (item.coldWater - +dataTarif.coldStart) * +dataTarif.cold;
    let electr = item[index - 1] ? item.electr - item[index - 1].electr * dataTarif.electr : (item.electr - +dataTarif.electrStart);
    item.coldWaterValue = cold;
    item.hotWaterValue = hot;
    item.electrValue = calcElectr(electr, +dataTarif.electr);
    item.total = item.electrValue + item.coldWaterValue + item.hotWaterValue + item.heating + item.stove + item.canalization + item.internet;
  })
  setReviews(billsArray)
  }
  
  getData();
  const [reviews, setReviews] = useState(),
  calcElectr = (data, tarif)=> {
    if(data > 100) {
      return data = (100 * tarif) + ((data - 100)* (tarif*2))
    } else {
      return data * tarif;
    }
  },
  deleteItem = (item)=> {
    const DB = `https://filmsonangular.firebaseio.com/bills/${item.key}.json`;
    fetch(DB, 
        {method: 'DELETE',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        }})
  };

  return (
    <View style={globalStyles.container}>
      <View>
        <Button title="Добавить новый счет" onPress={() => navigation.navigate('AddNewBill')} />
      </View>
      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity style={globalStyles.dashboardItem} onLongPress={()=> deleteItem(item) } onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Text style={globalStyles.titleText}>Счет за { item.month }</Text>
      <Text>Всего за месяц {item.total} грн</Text>
        </TouchableOpacity>
      )} />
    </View>
  );
}