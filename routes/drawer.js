import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import TarifStack from './tarifStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Счета: {
    screen: HomeStack,
  },
  Тарифы: {
    screen: TarifStack,
  },
});

export default createAppContainer(RootDrawerNavigator);