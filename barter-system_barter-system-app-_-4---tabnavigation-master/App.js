import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {BottomNavigator} from './components/BottomNavigator';
import LoginScreen from './screens/LoginScreen'
import { CreateDrawerNavigator } from 'react-navigation-drawer'
import { SettingScreen } from './screens/SettingScreen'
import { CustomSideBarMenu } from './components/CustomSideBarMenu'
import { AppTabNavigator } from './components/AppTabNavigator'

export default function App() {
  return (
      <AppContainer/>
  );
}

 const SwitchNavigator = createSwitchNavigator({
     LoginScreen:LoginScreen,
  BottomNavigator:BottomNavigator,
  AppTabNavigator:AppTabNavigator,
  
 })

 const AppContainer = createAppContainer(SwitchNavigator);


