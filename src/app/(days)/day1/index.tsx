import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function day1() {
  return (
    <View>
      <Stack.Screen options={{title: 'Day 1'}} />
      <Text>day1</Text>
    </View>
  )
}