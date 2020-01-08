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
              Электроэнергия
              </Text>
              <Text style={styles.value}>
                {navigation.getParam('electrValue')} грн ({navigation.getParam('electrEnt')} кВт)
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
    fontSize: 14
  },
  value: {
    fontSize: 14
  },
  nameTotal: {
    fontSize: 20
  },
  valueTotal: {
    fontSize:20,
    color: 'red'
  }
})