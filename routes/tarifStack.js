import { createStackNavigator } from 'react-navigation-stack';
import Tarif from '../screens/tarif';

const screens = {
  Tarif: {
    screen: Tarif,
    navigationOptions: {
      title: 'Тарифы'
    },
  },
}

const TarifStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default TarifStack;