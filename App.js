import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import {StyleSheet} from 'react-native';
import LicoresProvider from './Context/LicoresContext';
import Formulario from './Pantallas/Formulario';
import {NavigationContainer} from '@react-navigation/native';
import StackNav1 from './Navigations/StackNav1';
import BottomTabNav from './Navigations/BottomTabNav';


export default function App(){
  return(

    <LicoresProvider>
      <NavigationContainer>
        <BottomTabNav/>
      </NavigationContainer>
    </LicoresProvider>

  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
