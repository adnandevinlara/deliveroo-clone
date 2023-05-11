import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PrepareOrderScreen from './screens/PrepareOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import { Provider } from 'react-redux';
import { store } from "./store";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
          <Stack.Navigator>
          
            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='restaurant' component={RestaurantScreen} />
            <Stack.Screen  name='basket' 
              component={BasketScreen}
              options={{
                presentation: 'modal', headerShown: false
              }}
            />
            <Stack.Screen name='prepareorder' component={PrepareOrderScreen}
            options={{
              presentation: 'fullScreenModal',
              headerShown: false
            }}
            />
            <Stack.Screen name='delivery' component={DeliveryScreen}
            options={{
              presentation: 'fullScreenModal',
              headerShown: false
            }}
            />
            
          </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

