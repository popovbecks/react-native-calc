import React, {useState, Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button , ScrollView} from 'react-native';
import { globalStyles } from '../styles/global';

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
    <ScrollView style={globalStyles.container}>
      <Text>Электроэнергия, грн\кВт</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
       onChangeText={(val)=> this.onChangeInput(val, 'electr')}
      value={this.state.electr}/>
       <Text>Электроэнергия, нач. знач. кВт</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
       onChangeText={(val)=> this.onChangeInput(val, 'electrStart')}
      value={this.state.electrStart}/>
       <Text>Холодная вода грн\м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'cold')}
      value={this.state.cold}/>
       <Text>Холодная вода нач. знач. м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'coldStart')}
      value={this.state.coldStart}/>
      <Text>Горячая вода, грн\м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'hot')}
      value={this.state.hot}/>
       <Text>Горячая вода нач. знач. грн\м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'hotStart')}
      value={this.state.hotStart}/>
       <Text>Отопление, грн</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'heating')}
      value={this.state.heating}/>
       <Text>Интернет, грн\мес</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'internet')}
      value={this.state.internet}/>
       <Text>Канализация грн\м3</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'canaliz')}
      value={this.state.canaliz}/>
      <Text>Газовая плита грн\мес</Text>
      <TextInput 
      placeholder="Введите данные"
      keyboardType="decimal-pad"
      style={globalStyles.input}
      onChangeText={(val)=> this.onChangeInput(val, 'stove')}
      value={this.state.stove}/>
      <Button title="Подтвердить" onPress={()=>this.updateTarif()}>

      </Button>
    </ScrollView>
  );
} 

}