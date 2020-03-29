import React, {useState, Component} from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import {LinearGradient} from 'expo-linear-gradient';

export default class AddNewBill extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
            electr: '',
            hotWater: '',
            coldWater: '',
            month:'',
            avans: ''
        }
      this.dataDrop = [
           {
          value: 'Январь',
        }, {
          value: 'Февраль',
        }, {
          value: 'Март',
        },
        {
          value: 'Апрель',
        }, {
          value: 'Май',
        }, {
          value: 'Июнь',
        },
        {
          value: 'Июль',
        }, {
          value: 'Август',
        }, {
          value: 'Сентябрь',
        },
        {
          value: 'Октябрь',
        }, {
          value: 'Ноябрь',
        }, {
          value: 'Декабрь',
        }];
    }

        onChangeInput (value, key) {
      this.setState(Object.assign(this.state, {[key]: value}))
    }
        async submitToBD (data) {
          const DB = 'https://filmsonangular.firebaseio.com/bills.json';
          const fullDate = `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`;
           const submit = Object.assign(data, {canalization: +data.hotWater + +data.coldWater, date: fullDate} );
            fetch(DB, 
                {method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
            body: JSON.stringify(submit)})
             .then((response) =>{      
           this.props.navigation.goBack();      
            })
        
        };
       

   render() {
     return (
      <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={globalStyles.container}>
      <Dropdown
        label='Выбрать месяц'
        data={this.dataDrop}
       onChangeText={(val)=> this.onChangeInput(val, 'month')}
        containerStyle={{margin:0, padding:0, width:200, top:0}}
        baseColor='#fff'
        textColor='#fff'
        selectedItemColor='black'
      />
      <Text style={globalStyles.titleText}>Электричество, кВт/час</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
     onChangeText={(val)=> this.onChangeInput(val, 'electr')}
      value={this.state.electr}/>
      <Text style={globalStyles.titleText}>Горячая Вода, м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'hot')}
      value={this.hot}/>
      <Text style={globalStyles.titleText}>Холодная вода, м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'cold')}
      value={this.state.cold}/>
       <Text style={globalStyles.titleText}>Отопление, грн</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'heating')}
      value={this.state.heating}/>
       <Text style={globalStyles.titleText}>Интернет, грн\мес</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'internet')}
      value={this.state.internet}/>
       <Text style={globalStyles.titleText}>Аванс, грн</Text>
       <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'avans')}
      value={this.state.avans}/>
     
      
      <Button title="Добавить" onPress={()=> this.submitToBD(this.state)} />
    </LinearGradient>
  );
   }
  
}