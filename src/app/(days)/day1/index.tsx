import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function day1() {
  return (
    <View style={{justifyContent:'center', alignItems: 'center'}}>
      <Stack.Screen options={{title: 'Day 1'}} />
      <Text style={{fontFamily: 'AmaticSC_700Bold', fontSize: 200}}>day1</Text>
    </View>
  )
}