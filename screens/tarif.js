import React, {useState, Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button , ScrollView} from 'react-native';
import { globalStyles } from '../styles/global';
import {LinearGradient} from 'expo-linear-gradient';

export default class Tarif extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
      };
      this.DB = `https://filmsonangular.firebaseio.com/tarif.json`;
    }
    componentDidMount() {
      this.getTarif()
    }
    onChangeInput (value, key) {
      this.setState(Object.assign(this.state, {[key]: value}))
    }
        async getTarif () {
        let resp = await fetch(this.DB);
        let data = await resp.json();
        this.setState(data)
        };

  updateTarif() {
      fetch(this.DB, 
            {method: 'PUT',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
        body: JSON.stringify(this.state)})
         .then((response) => {
            this.props.navigation.navigate("Home");
        })
  }
render() {
  return (
    <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={globalStyles.container}>
    <ScrollView >
      <Text style={globalStyles.titleText}>Электроэнергия, грн\кВт</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'electr')}
      value={this.state.electr}/>
       <Text style={globalStyles.titleText}>Электроэнергия, нач. знач. кВт</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'electrStart')}
      value={this.state.electrStart}/>
       <Text style={globalStyles.titleText}>Холодная вода грн\м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'cold')}
      value={this.state.cold}/>
       <Text style={globalStyles.titleText}>Холодная вода нач. знач. м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'coldStart')}
      value={this.state.coldStart}/>
      <Text style={globalStyles.titleText}>Горячая вода, грн\м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'hot')}
      value={this.state.hot}/>
       <Text style={globalStyles.titleText}>Горячая вода нач. знач. грн\м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'hotStart')}
      value={this.state.hotStart}/>
       <Text style={globalStyles.titleText}>Канализация грн\м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'canaliz')}
      value={this.state.canaliz}/>
      <Text style={globalStyles.titleText}>Газовая плита грн\мес</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'stove')}
      value={this.state.stove}/>
      <Button title="Подтвердить" onPress={()=>this.updateTarif()}></Button>
    </ScrollView>
      </LinearGradient>
  );
} 

}