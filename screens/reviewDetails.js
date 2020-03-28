import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';


export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.container}>
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
        </ScrollView>
      </View>
    </View>
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
    color: 'red',
  }
})