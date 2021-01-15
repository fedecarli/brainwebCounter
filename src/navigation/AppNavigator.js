import React from 'react'
import {
  Text,
} from 'react-native';

import { createBottomTabNavigator, } from 'react-navigation-tabs';
import { createAppContainer, } from 'react-navigation';
import {
  createStackNavigator,
} from 'react-navigation-stack';

import ListCounters from '../screens/ListCounters';
import ConfigCounters from '../screens/ConfigCounters';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListStack = createStackNavigator({
  ListCounters: { screen: ListCounters }
});

ListStack.navigationOptions = ({ navigation }) => (
  {
    showIcon: true,
    tabBarIcon: ({ focused }) => (
      <Icon name="add-chart" size={focused ? 24 : 16} color={focused ? '#ff9500' : '#8e8e93'} style={{marginTop: 10,}}/>
    ),
    tabBarLabel: ({ focused }) => (
      <Text style={{
        color: focused ? '#ff9500' : '#8e8e93', fontSize: focused ? 12 : 10, fontWeight: focused ? 'bold' : 'normal'
      }}
      >
        Contadores
      </Text>
    ),
    tabBarOptions: {
      tabStyle: {
        backgroundColor: '#001c47',
        activeBackgroundColor: '#001c47',
        activeTintColor: '#ff9500',
        inactiveBackgroundColor: '#8e8e93',
      },
      style: {
        backgroundColor: '#001c47',
        activeBackgroundColor: '#001c47',
        activeTintColor: '#ff9500',
        inactiveBackgroundColor: '#8e8e93',
      },
    },
  }
)

const ConfigStack = createStackNavigator({
  ConfigCounters: { screen: ConfigCounters }
});

ConfigStack.navigationOptions = ({ navigation }) => (
  {
    showIcon: false,
    tabBarIcon: ({ focused }) => (
      <Icon name="settings" size={focused ? 24 : 16} color={focused ? '#ff9500' : '#8e8e93'} style={{marginTop: 10,}}/>
    ),
    tabBarLabel: ({ focused }) => (
      <Text style={{
        color: focused ? '#ff9500' : '#8e8e93', fontSize: focused ? 12 : 10, fontWeight: focused ? 'bold' : 'normal'
      }}
      >
        Configuração
      </Text>
    ),
    tabBarOptions: {
      tabStyle: {
        backgroundColor: '#001c47',
        activeBackgroundColor: '#001c47',
        activeTintColor: '#ff9500',
        inactiveBackgroundColor: '#8e8e93',
      },
      style: {
        backgroundColor: '#001c47',
        activeBackgroundColor: '#001c47',
        activeTintColor: '#ff9500',
        inactiveBackgroundColor: '#8e8e93',
      },
    },
  }
)


const mainTab = createBottomTabNavigator({
  List: { screen: ListStack },
  Config: { screen: ConfigStack },
}, {
  initialRouteName: 'List',
  swipeEnabled: true,
  navigationOptions: {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    LazyLoading: true,
    tabBarVisible: true,
    lazy: true,
    tabBarOptions: {
      scrollEnabled: true,
      animationEnabled: true,
      showLabel: true,
      showIcon: true,
      labelStyle: {
        fontSize: 11,
        marginTop: 0,
        fotWeight: '400',
        lineHeight: 12,
        height: 12,
      },
    },
  },
});

export default createAppContainer(mainTab);