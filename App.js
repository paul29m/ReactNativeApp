/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/home'
import ListScreen from './app/list'
import EditScreen from './app/edit'

const Screens = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  ListScreen: {screen: ListScreen},
  EditScreen: {screen: EditScreen}
});

export default Screens;