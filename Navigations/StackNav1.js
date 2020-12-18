import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Formulario from '../Pantallas/Formulario';
import Listado from '../Pantallas/Listado';

const Stack = createStackNavigator();

export default function StackNav1() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Listado"
                component={Listado}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Formulario"
                component={Formulario}
            />
        </Stack.Navigator>
    )
}