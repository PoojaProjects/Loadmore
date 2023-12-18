import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/HomeScreen';
import Splash from './src/Splash';
import Login from './src/Login';
import OTPVarification from './src/OTPVarification';
import Home from './src/Home';
import Electrician from './src/Electrician';
import Drawerscreen from './src/Drawerscreen';
const windowWidth = Dimensions.get('window').width;

// const Drawer = createDrawerNavigator();
// function Mydrawer() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         // drawerType:'front',
//       }}
//       drawerStyle={{

//         width: windowWidth * 85 / 100,
//       }}
//       drawerContent={props => <Drawerscreen {...props} />}>
//       <Drawer.Screen
//         name="Home"
//         options={{
//         headerShown: false,
//         }}
//         component={Home}
//       />
//     </Drawer.Navigator>
//   );
//  }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="OTPVarification"
          component={OTPVarification}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Electrician"
          component={Electrician}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
