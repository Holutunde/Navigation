import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen'
import DetailScreen from './Components/DetailScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
           component={HomeScreen}
           options={{ 
             title: 'Overview',
           headerStyle:{
             backgroundColor:'#009387'
           },
           headerTintColor:"#fff",
           headerTitleStyle:{
             fontWeight:'bold'
           }
          }}
         />
        <Stack.Screen name="Details"
           component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;