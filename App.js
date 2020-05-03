import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import PasswordScreen from './src/screens/PasswordScreen';

const navigator = createStackNavigator(
{
   Home: HomeScreen,
   Password : PasswordScreen
},
{
	headerMode: 'none',
   initialRouteName: 'Home'
}
  );

export default createAppContainer(navigator);
