import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter'

const BasketIcon = () => {
  const items = useSelector(selectBasketItems)
  const navigation = useNavigation()
  const basketTotal = useSelector(selectBasketTotal)

  if (items.length === 0) return null

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="bg-[#00CCBB] rounded-lg p-4 mx-5 flex-row items-center space-x-5"
        onPress={() => {
          navigation.navigate('Basket')
        }}
      >
        <Text className="text-white text-lg font-extrabold py-1 px-2 bg-[#014296]">{items?.length}</Text>
        <Text className="text-white text-lg font-extrabold text-center flex-1">View Basket</Text>
        <Text className="text-white text-lg font-extrabold text-center">
          <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon
