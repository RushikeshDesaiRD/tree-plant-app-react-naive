import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { HomeStackNavigator } from './navigaions/Navigator'
//HomeStackNavigator

export default function App() {
  return (
    <NavigationContainer>
     <HomeStackNavigator/>
    </NavigationContainer>
  )
}
