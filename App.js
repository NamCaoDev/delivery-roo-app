import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { TailwindProvider } from 'tailwindcss-react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'
import store from './store'
import { Provider as ReduxProvider } from 'react-redux'
import BasketScreen from './screens/BasketScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import DeliveryScreen from './screens/DeliveryScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Restaurant" component={RestaurantScreen}></Stack.Screen>
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{ presentation: 'modal', headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="PreparingOrder"
              component={PreparingOrderScreen}
              options={{
                presentation: 'fullScreenModal',
                headerShown: false,
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{
                presentation: 'fullScreenModal',
                headerShown: false,
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </TailwindProvider>
      </ReduxProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
