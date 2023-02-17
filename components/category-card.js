import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imageUrl, title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image source={{
            uri: imageUrl
        }} 
         className="w-20 h-20 rounded"
        />
        <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard