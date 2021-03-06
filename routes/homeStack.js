import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import AddNewBill from '../screens/addNewBill';
import EditBill from '../screens/editBills';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle: () => <Header navigation={navigation} title='Список счетов'/>,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: ({navigation})=>{
          return  {title: `Детали счета за ${navigation.getParam('month')}`}
        }
    },
    AddNewBill: {
        screen: AddNewBill,
        navigationOptions: {
            title: 'Добавить Новый Счет'
        }
    },
    EditBill: {
        screen: EditBill,
        navigationOptions: {
            title: 'Редактирование Счета'
        }
    }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default HomeStack;