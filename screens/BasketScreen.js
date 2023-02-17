import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { XCircleIcon } from 'react-native-heroicons/solid'
import Currency from 'react-currency-formatter'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { selectRestaurant } from '../features/restaurantSlice'

import { urlFor } from '../sanity'

const BasketScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const items = useSelector(selectBasketItems)
  const restaurant = useSelector(selectRestaurant)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const basketTotal = useSelector(selectBasketTotal)

  console.log('Grouped', Object.entries(groupedItemsInBasket))

  useEffect(() => {
    const groupedItems = items?.reduce((results, item) => {
      ;(results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})
    setGroupedItemsInBasket(groupedItems)
  }, [items])
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="bg-gray-100 flex-1">
        <View className="bg-white border-[#00CCBB] border-b shadow-xs p-5">
          <Text className="text-lg font-bold text-center">Basket</Text>
          <Text className="text-gray-400  text-center">{restaurant.title}</Text>
        </View>
        <TouchableOpacity className="absolute top-3 right-5" onPress={() => navigation.goBack()}>
          <XCircleIcon color="#00CCBB" width={54} height={54} />
        </TouchableOpacity>
        <View className="flex-row items-center space-x-5 bg-white px-4 py-3 my-5">
          <Image
            className="h-7 w-7 p-4 bg-gray-300 rounded-full"
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
          />
          <Text className="flex-1">Delivery in 50-75 min</Text>
          <Text className="text-[#00CCBB]">Change</Text>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket)?.map(([key, item]) => (
            <View className="bg-white py-2 px-4 flex-row items-center space-x-4" key={key}>
              <Text className="text-[#00CCBB]">{item?.length} x</Text>
              <Image
                source={{
                  uri: urlFor(item[0]?.image).url(),
                }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="font-extrabold flex-1">{item[0]?.name}</Text>
              <Text className="text-gray-400">
                <Currency quantity={item[0]?.price} currency="USD" />
              </Text>
              <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id: key }))}>
                <Text className="text-[#00CCBB]">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="bg-white p-5 mt-5 space-y-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-400">Basket Total</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="USD" />
            </Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="USD" />
            </Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="font-extrabold">Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 5.99} currency="USD" />
            </Text>
          </View>
          <TouchableOpacity
            className="p-4 bg-[#00CCBB] rounded-lg"
            onPress={() => {
              navigation.navigate('PreparingOrder')
            }}
          >
            <Text className="text-center font-bold text-white text-lg">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
