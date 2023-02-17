import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Delivery')
    }, 4000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <SafeAreaView className="items-center justify-center bg-[#00CCBB] flex-1">
      <Animatable.Image
        source={require('../assets/preparing-order.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="w-96 h-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-white my-10 font-bold text-center text-lg"
      >
        Waiting for restaurant accept the order!
      </Animatable.Text>

      <Progress.Circle size={60} color="white" indeterminate={true} />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
