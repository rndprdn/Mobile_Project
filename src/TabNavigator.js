import React, { Component } from 'react'; 
import { Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import anNaas from './An-Naas';
import alFalaq from './Al-Falaq';

export default createMaterialTopTabNavigator({ 
  An_Naas: { screen: anNaas }, 
  Al_Falaq: { screen: alFalaq }, 
});
