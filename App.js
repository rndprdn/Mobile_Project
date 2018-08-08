import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './src/Login';
import TabNavigator from './src/TabNavigator';
import Regis from './src/Regis';
import { Title } from 'native-base';

const RootStack = createStackNavigator( 
  { 
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  }, 
  Home: {
    screen: TabNavigator,
    navigationOptions: ({navigation}) => ({ 
      title: 'Welcome',
      headerLeft: 
        <Icon 
          name = 'sign-out'
          type = 'font-awesome'
          onPress={() => this.props.navigation.navigate('Login')}
        />
    })
  },
  Regis: {
    screen: Regis,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  } 
  }, 
  { 
    initialRouteName: 'Login'
  } 
);

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}
