import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './restaurant-card'

const FeaturedRow = ({ id, title, description, restaurants }) => {
  return (
    <View>
      <View className="mt-4 px-4 flex-row justify-between items-center">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-gray-500 text-xs px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 13,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((res) => (
          <RestaurantCard
            id={res?._id}
            key={res?._id}
            imgUrl={res?.image}
            title={res?.name}
            rating={res?.rating}
            genre={res?.genre}
            address={res?.address}
            short_description={res?.short_description}
            dishes={res?.dishes}
            long={res?.long}
            lat={res?.lat}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
