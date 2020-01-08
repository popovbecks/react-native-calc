import React, {useState, Component} from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default class AddNewBill extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
            electr: '',
            hotWater: '',
            coldWater: '',
            month:''
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
           const submit = Object.assign(data, {canalization: +data.hotWater + +data.coldWater, date: fullDate });
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
    <View style={globalStyles.container}>
      <Dropdown
        label='Выбрать месяц'
        data={this.dataDrop}
       onChangeText={(val)=> this.onChangeInput(val, 'month')}
        containerStyle={{margin:0, padding:0, width:200, top:0}}
      />
      <Text>Электричество, кВт/час</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
     onChangeText={(val)=> this.onChangeInput(val, 'electr')}
      value={this.electr}/>
      <Text>Горячая Вода, м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'hot')}
      value={this.hot}/>
      <Text>Холодная вода, м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'cold')}
      value={this.cold}/>
       <Text>Отопление, грн</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'heating')}
      value={this.heating}/>
      
      <Button title="Добавить" onPress={()=> this.submitToBD(this.state)} />
    </View>
  );
   }
  
}