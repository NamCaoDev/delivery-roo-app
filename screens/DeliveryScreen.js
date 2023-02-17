import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="p-5 flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
            <XMarkIcon color="white" size={30} className="font-bold" />
          </TouchableOpacity>
          <Text className="text-light text-white text-lg">Order help</Text>
        </View>
        <View className="bg-white px-5 py-5 mx-5 mt-2 rounded-md">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-gray-500 text-lg font-extralight mb-1">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image source={{ uri: 'https://links.papareact.com/fls' }} className="w-20 h-20" />
          </View>
          <Progress.Bar size={30} indeterminate={true} color="#00CCBB" />
          <Text className="mt-4 text-md text-gray-500">Your order of {restaurant.title} is being prepared</Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
        className="-mt-10 z-0 flex-1"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        ></Marker>
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-30 z-10">
        <View className="ml-5 py-4">
          <Image source={{ uri: 'https://links.papareact.com/wru' }} className="w-12 h-12 rounded-full bg-gray-300" />
        </View>

        <View className="flex-1">
          <Text className="font-bold text-lg">Nam Cao</Text>
          <Text className="text-gray-400">Motobike Vario</Text>
        </View>
        <TouchableOpacity className="mr-5">
          <Text className="text-[#00CCBB] text-lg font-bold">Cell</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen
