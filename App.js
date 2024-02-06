import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screen/HomeScreen';
import FlowerDetailScreen from './screen/FlowerDetailsScreen';
import SubPage from './screen/SubPage';
import ThankyouScreen from './screen/ThankyouScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlowerDetail"
          component={FlowerDetailScreen}
        />
        <Stack.Screen
          name="SubPage"
          component={SubPage}
        />
        <Stack.Screen
          name="Thankyou"
          component={ThankyouScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
