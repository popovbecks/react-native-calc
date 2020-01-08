import { createStackNavigator } from 'react-navigation-stack';
import Tarif from '../screens/tarif';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Tarif: {
    screen: Tarif,
    navigationOptions: ({navigation})=> {
      return {
          headerTitle: () => <Header navigation={navigation} title='Тарифы'/>,
      }
  }
  },
}

const TarifStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default TarifStack;