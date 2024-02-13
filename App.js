import * as React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { ThemeProvider } from '@rneui/themed';
import { mainTheme } from './themes/mainTheme';

import HomeScreen from './screen/HomeScreen';
import SubPage from './screen/SubPage';
import ThankyouScreen from './screen/ThankyouScreen';
import ItemDetailScreen from './screen/ItemDetailScreen';

import { useFonts } from 'expo-font';
import { Aleo_700Bold, Aleo_400Regular} from '@expo-google-fonts/aleo'; 
import { SpaceGrotesk_400Regular,SpaceGrotesk_500Medium,SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';

// https://www.npmjs.com/package/@expo-google-fonts/space-grotesk
// https://www.jsdelivr.com/package/npm/@expo-google-fonts/aleo


// import {
//   useFonts,
//   Aleo_300Light,
//   Aleo_300Light_Italic,
//   Aleo_400Regular,
//   Aleo_400Regular_Italic,
//   Aleo_700Bold,
//   Aleo_700Bold_Italic,
// } from '@expo-google-fonts/aleo';

//  const [fontsLoaded] = useFonts({
//     Aleo_300Light,
//     Aleo_300Light_Italic,
//     Aleo_400Regular,
//     Aleo_400Regular_Italic,
//     Aleo_700Bold,
//     Aleo_700Bold_Italic,
//   });

//   import {
//     useFonts,
//     SpaceGrotesk_300Light,
//     SpaceGrotesk_400Regular,
//     SpaceGrotesk_500Medium,
//     SpaceGrotesk_600SemiBold,
//     SpaceGrotesk_700Bold,
//   } from '@expo-google-fonts/space-grotesk';
  
//   export default () => {
//     let [fontsLoaded] = useFonts({
//       SpaceGrotesk_300Light,
//       SpaceGrotesk_400Regular,
//       SpaceGrotesk_500Medium,
//       SpaceGrotesk_600SemiBold,
//       SpaceGrotesk_700Bold,
//     });

const Stack = createNativeStackNavigator();


export default function App() {
// add the hook that loads the font
  let [fontsLoaded] = useFonts({
    Aleo_700Bold,Aleo_400Regular,
    SpaceGrotesk_400Regular,SpaceGrotesk_500Medium,SpaceGrotesk_700Bold,
    'BalginDisplay-ExtraBold': require('./assets/fonts/BalginDisplay-ExtraBold.otf')
    });
// add a conditional to show the ActivityIndicator until the font loads
    if (!fontsLoaded) {
      return (
      <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#b9c8ff' />
      </View>
      );
      }

  return(
    <ThemeProvider theme={mainTheme}>  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
           name="ItemDetailScreen"
          component={ItemDetailScreen}
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
    </ThemeProvider> 
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
});