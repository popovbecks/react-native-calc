import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import {LinearGradient} from 'expo-linear-gradient';

export default function Home({ navigation }) {
  const billsArray = [];
 
  
  const [reviews, setReviews] = useState(),
  calcElectr = (data, tarif)=> {
    if(data > 100) {
      return data = (100 * tarif) + ((data - 100)* (tarif*2))
    } else {
      return data * tarif;
    }
  },
  calcWater = (data, tarif) =>{
    return data * tarif
  },
  deleteItem = (item)=> {
    const DB = `https://filmsonangular.firebaseio.com/bills/${item.key}.json`;
    fetch(DB, 
        {method: 'DELETE',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        }})
  };
  useEffect(()=>{
    let getData = async () => {
      const DB = 'https://filmsonangular.firebaseio.com/bills.json';
      const Tarif = `https://filmsonangular.firebaseio.com/tarif.json`;
    let respAccount = await fetch(DB);
    let dataAccount = await respAccount.json();
    let respTarif = await fetch(Tarif);
    let dataTarif = await respTarif.json();
    for(const key in dataAccount) {
      billsArray.push({
        coldWater: +dataAccount[key].cold || 0,
        hotWater: +dataAccount[key].hot || 0,
        electr: +dataAccount[key].electr,
        stove: +dataTarif.stove,
        internet: +dataAccount[key].internet || 0,
        heating: +dataAccount[key].heating || 0,
        month: dataAccount[key].month,
        avans: dataAccount[key].avans,
        date: dataAccount[key].date,
        key: key
      })
    }
    billsArray.forEach((item, index)=> {
      let hot = billsArray[index - 1] ? item.hotWater - billsArray[index - 1].hotWater : (item.hotWater - +dataTarif.hotStart);
      let cold = billsArray[index - 1] ? item.coldWater - billsArray[index - 1].coldWater: (item.coldWater - +dataTarif.coldStart);
      let electr = billsArray[index - 1] ? (item.electr - billsArray[index - 1].electr) : (item.electr - +dataTarif.electrStart);
      let canaliz = (cold + hot) * +dataTarif.canaliz;
      item.electrEnt = electr;
      item.hotEnt = hot;
      item.coldEnt = cold;
      item.coldWaterValue = calcWater(cold, +dataTarif.cold);
      item.hotWaterValue = calcWater(hot, +dataTarif.hot);
      item.electrValue = calcElectr(electr, +dataTarif.electr);
      item.canalization = canaliz;
      item.total = item.electrValue + item.coldWaterValue + item.hotWaterValue + item.heating + item.stove + item.canalization + item.internet - +item.avans;
    })
    setReviews(billsArray)
    }
    getData()})
  return (
   
      <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={globalStyles.container}>
        <View>
          <Button title="Добавить новый счет" onPress={() => navigation.navigate('AddNewBill')} />
        </View>
        <FlatList data={reviews} renderItem={({ item }) => (
          <TouchableOpacity onLongPress={() => deleteItem(item)} onPress={() => navigation.navigate('ReviewDetails', item)}>
            <LinearGradient colors={['#ddeeeb', '#d2eceb', '#c6e9ec', '#bbe6f0', '#b2e3f4']}
      start={[0, 0]}
      end={[1, 1]}
      location={[0.25, 0.4, 1]} style={globalStyles.dashboardItem} >
            <Text style={globalStyles.titleTextHome}>Счет за {item.month}</Text>
            <Text>Всего за месяц {item.total.toFixed(2)} грн</Text>
            </LinearGradient>
          </TouchableOpacity>
        )} />
      </LinearGradient>
  );
}