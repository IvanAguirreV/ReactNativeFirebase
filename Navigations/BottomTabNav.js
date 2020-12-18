import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicos from 'react-native-vector-icons/Ionicons';
import Formulario from '../Pantallas/Formulario';
import Listado from '../Pantallas/Listado';
import Inicio from '../Pantallas/Inicio';
import StackNav1 from './StackNav1';
import Consultas from '../Pantallas/Consultas';

const Tab = createBottomTabNavigator();


export default function BottomTabNav() {
    return (
        
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#FFB241",
                inactiveTintColor: "#8F8F8F",
                showLable: true,
                labelStyle: {
                    fontSize: 12
                },
                style: {
                    paddingBottom: 5,
                    paddingTop: 5,
                    backgroundColor: "#434343"
                }
            }}
        >

            <Tab.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"ios-home"} size={20} color={color} />
                    )
                }} 
            />

            <Tab.Screen
                name="Formulario"
                component={StackNav1} 
                options={{
                    tabBarLabel: "Formulario",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"ios-clipboard"} size={20} color={color} />
                    )
                }}
            /> 

            <Tab.Screen
                name="Consultas"
                component={Consultas}
                options={{
                    tabBarLabel: "Consultas",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"ios-search"} size={20} color={color} />
                    )
                }}
            />

        </Tab.Navigator>
    )
}