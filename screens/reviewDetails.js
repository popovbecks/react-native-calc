import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import {LinearGradient} from 'expo-linear-gradient';

export default function ReviewDetails({ navigation }) {
  return (
      <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={globalStyles.container}>
        <ScrollView>
          <View>
          <View style={styles.listItem}>
              <Text style={styles.name}>
              Дата созд.
              </Text>
              <Text style={styles.value}>
                {navigation.getParam('date')}
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.name}>
              Электроэнергия
              </Text>
              <Text style={styles.value}>
                {navigation.getParam('electrValue').toFixed(2)} грн ({navigation.getParam('electrEnt')} кВт)
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.name}>
              Горячая Вода
              </Text>
              <Text style={styles.value}>
              {navigation.getParam('hotWaterValue')} грн ({navigation.getParam('hotEnt')} м3)
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.name}>
              Холодная вода
              </Text>
              <Text style={styles.value}>
              {navigation.getParam('coldWaterValue')} грн ({navigation.getParam('coldEnt')} м3)
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.name}>
              Отопление
              </Text>
              <Text style={styles.value}>
              {navigation.getParam('heating')} грн 
              </Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.name}>
              Канализация
              </Text>
              <Text style={styles.value}>
              {navigation.getParam('canalization').toFixed(2)} грн ({navigation.getParam('coldEnt') + navigation.getParam('hotEnt')} м3)
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.name}>
              Интернет
              </Text>
              <Text style={styles.value}>
              {navigation.getParam('internet')} грн 
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.name}>
              Газовая плита
              </Text>
              <Text style={styles.value}>
              {navigation.getParam('stove')} грн 
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.name}>
              Аванс
              </Text>
              <Text style={styles.value}>
              {navigation.getParam('avans')} грн 
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.nameTotal}>
              Всего за месяц
              </Text>
              <Text style={styles.valueTotal}>
              {navigation.getParam('total').toFixed(2)} грн 
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.nameTotal}>
              Всего оплатить
              </Text>
              <Text style={styles.valueTotal}>
              {navigation.getParam('total').toFixed(2) - navigation.getParam('internet')} грн 
              </Text>
            </View>
          </View>
          <View>
            <Button title="Редактировать" onPress={() => navigation.navigate('EditBill', navigation)} />
          </View>
        </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
    color: '#fff'
  },
  value: {
    fontSize: 14,
    color: '#fff'
  },
  nameTotal: {
    fontSize: 18,
    color: 'ivory'
  },
  valueTotal: {
    fontSize:18,
    color: 'black',
    fontWeight: 'bold'
  }
})