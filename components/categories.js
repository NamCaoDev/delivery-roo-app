import { View, Text,ScrollView } from 'react-native'
import React from 'react'

import CategoryCard from './category-card'

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10
    }}
     horizontal
     showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="test" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="test"/>
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="test"/>
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="test"/>
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="test"/>
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="test"/>
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="test"/>
    </ScrollView>
  )
}

export default Categories