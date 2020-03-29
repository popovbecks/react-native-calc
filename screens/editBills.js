import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default class EditBill extends React.Component {
    constructor(data) {
        super(data);
        this.data = data;
        this.state = {

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
        // this.onChangeInput(data.navigation.state.params.getParam('month'), 'month');
    }
    componentDidMount() {
        this.getBills()
    }
    getBills() {
        this.setState({
            electr: this.data.navigation.state.params.getParam('electr'),
            hotWater: this.data.navigation.state.params.getParam('hotWater'),
            coldWater: this.data.navigation.state.params.getParam('coldWater'),
            month: this.data.navigation.state.params.getParam('month'),
            internet: this.data.navigation.state.params.getParam('internet'),
            heating: this.data.navigation.state.params.getParam('heating'),
            avans: this.data.navigation.state.params.getParam('avans'),
            key: this.data.navigation.state.params.getParam('key')
        })

    }
    onChangeInput(value, key) {
        this.setState(Object.assign(this.state, { [key]: value }))
    }
    async submitToBD(data) {
        const DB = `https://filmsonangular.firebaseio.com/bills/${data.key}.json`;
        const fullDate = `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`;
        const submit = Object.assign(data, { canalization: +data.hotWater + +data.coldWater, date: fullDate });
        fetch(DB,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(submit)
            })
            .then((response) => {
                this.props.navigation.navigate('Home');
            })

    };


    render() {
        return (
            <View style={globalStyles.container}>
                <Dropdown
                    label='Выбрать месяц'
                    data={this.dataDrop}
                    value={this.state.month}
                    onChangeText={(val) => this.onChangeInput(val, 'month')}
                    containerStyle={{ margin: 0, padding: 0, width: 200, top: 0 }}
                    baseColor='#fff'
                    textColor='#fff'
                    selectedItemColor='black'
                />
                <Text style={globalStyles.titleText}>Электричество, кВт/час</Text>
                <TextInput
                    placeholder="Введите данные"
                    keyboardType="decimal-pad"
                    style={globalStyles.input}
                    onChangeText={(val) => this.onChangeInput(val, 'electr')}
                    value={this.state.electr + ''} />
                <Text style={globalStyles.titleText}>Горячая Вода, м3</Text>
                <TextInput
                    placeholder="Введите данные"
                    keyboardType="decimal-pad"
                    style={globalStyles.input}
                    onChangeText={(val) => this.onChangeInput(val, 'hot')}
                    value={this.state.hotWater + ''} />
                <Text style={globalStyles.titleText}>Холодная вода, м3</Text>
                <TextInput
                    placeholder="Введите данные"
                    keyboardType="decimal-pad"
                    style={globalStyles.input}
                    onChangeText={(val) => this.onChangeInput(val, 'cold')}
                    value={this.state.coldWater + ''} />
                <Text style={globalStyles.titleText}>Отопление, грн</Text>
                <TextInput
                    placeholder="Введите данные"
                    keyboardType="decimal-pad"
                    style={globalStyles.input}
                    onChangeText={(val) => this.onChangeInput(val, 'heating')}
                    value={this.state.heating + ''} />
                <Text style={globalStyles.titleText}>Интернет, грн\мес</Text>
                <TextInput
                    placeholder="Введите данные"
                    keyboardType="decimal-pad"
                    style={globalStyles.input}
                    onChangeText={(val) => this.onChangeInput(val, 'internet')}
                    value={this.state.internet + ''} />
                <Text style={globalStyles.titleText}>Аванс, грн</Text>
                <TextInput
                    placeholder="Введите данные"
                    keyboardType="decimal-pad"
                    style={globalStyles.input}
                    onChangeText={(val) => this.onChangeInput(val, 'avans')}
                    value={this.state.avans + ''} />

                <Button title="Обновить" onPress={() => this.submitToBD(this.state)} />
            </View>
        );
    }

}