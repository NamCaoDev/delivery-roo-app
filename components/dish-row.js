import { View, Text, TouchableOpacity, Image } from 'react-native'
import Currency from 'react-currency-formatter'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItemsWithId, addToBasket, removeFromBasket } from '../features/basketSlice'

const DishRow = ({ name, description, price, image, id }) => {
  const dispatch = useDispatch()
  const [isPress, setIsPress] = useState(false)
  const items = useSelector((state) => selectBasketItemsWithId(state, id))
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }))
  }

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }))
  }

  return (
    <TouchableOpacity
      className={`bg-white border border-gray-300 p-4 ${isPress && 'border-b-0'}`}
      onPress={() => setIsPress(!isPress)}
    >
      <View className="flex-row items-center">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400 mt-2">
            <Currency quantity={price} currency="USD" />
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: urlFor(image).url(),
            }}
            className="h-20 w-20 p-4 bg-gray-300"
            style={{
              borderWidth: 1,
              borderColor: '#f3f3f4',
            }}
          />
        </View>
      </View>
      {isPress && (
        <View className="py-4">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity onPress={removeItemFromBasket} disabled={!items?.length}>
              <MinusCircleIcon size={40} color={items?.length > 0 ? '#00CCBB' : 'gray'} />
            </TouchableOpacity>
            <Text>{items?.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default DishRow
