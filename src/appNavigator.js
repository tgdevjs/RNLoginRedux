import { StackNavigator } from 'react-navigation';

import LoginScreen from './loginScreen';
import HomeScreen from './homeScreen';

export default AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen},
});
