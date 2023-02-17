import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity'

const RestaurantCard = ({ id, imgUrl, title, rating, genre, address, short_description, dishes, lat, long }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow w-60 overflow-hidden"
      onPress={() => {
        navigation.navigate('Restaurant', {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          lat,
          long,
        })
      }}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-60 rounded-sm"
      />

      <View className="px-3 pb-4 w-full">
        <Text className="font-bold text-lg pt-2 pr-3">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> - {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 w-full pr-3">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500" adjustsFontSizeToFit={true}>
            Nerby - {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
