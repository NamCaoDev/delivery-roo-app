import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline'
import { useDispatch } from 'react-redux'

import DishRow from '../components/dish-row'
import BasketIcon from '../components/basket-icon'
import { setRestaurant } from '../features/restaurantSlice'

const RestaurantScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const {
    params: { id, imgUrl, title, rating, genre, address, short_description, dishes, lat, long },
  } = useRoute()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    dispatch(setRestaurant({ id, imgUrl, title, rating, genre, address, short_description, dishes, lat, long }))
  }, [dispatch])
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="p-4 w-full h-56 bg-gray-300"
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
        <View className="bg-white px-4 pt-4">
          <View>
            <Text className="text-3xl font-bold">{title}</Text>
          </View>
          <View className="flex-row items-center space-x-2 pt-2">
            <View className="flex-row items-center space-x-1">
              <StarIcon opacity={0.5} color="green" size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text>- {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon opacity={0.5} size={22} color="gray" />
              <Text className="text-xs text-gray-500">Nearby - {address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 pt-4 pb-4">{short_description}</Text>
          <TouchableOpacity className="py-4 border-y border-gray-300 flex-row space-x-2 items-center">
            <QuestionMarkCircleIcon color="gray" size={20} opacity={0.5} />
            <Text className="text-md font-bold flex-1">Have a food allergy?</Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="pt-6 pb-30">
          <Text className="font-bold text-xl px-4 pb-4">Menu</Text>
          {dishes?.map((dish) => (
            <DishRow
              key={dish?._id}
              id={dish?._id}
              name={dish?.name}
              description={dish?.short_description}
              price={dish?.price}
              image={dish?.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default RestaurantScreen
