//* RN NAVIGATION IMPORTS//
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//* SCREEN IMPORTS//
import HomeScreen from '../screens/Home/HomeScreen';
import ProductScreen from '../screens/Product/ProductScreen';

//* ROOT NAVIGATION//
const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
        />

        <Stack.Screen
          name='Products'
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
