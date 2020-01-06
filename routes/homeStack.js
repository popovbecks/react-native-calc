import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import AddNewBill from '../screens/addNewBill';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Список счетов',
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Детали счета',
        }
    },
    AddNewBill: {
        screen: AddNewBill,
        navigationOptions: {
            title: 'Добавить Новый Счет'
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