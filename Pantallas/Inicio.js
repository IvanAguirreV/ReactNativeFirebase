import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';


const Inicio = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container2}>
                <Text>INICIO</Text>
                <Image style={styles.imagesize}
                    source={require('../assets/botle.png')}
                />
            </View>

            <StatusBar backgroundColor="#434343" />
        </SafeAreaView>

    )
}

export default Inicio;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    imagesize: {
        width: 150,
        height: 150,
    },
});