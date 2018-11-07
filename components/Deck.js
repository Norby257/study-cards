import React, {Component} from 'react'
import {View, TouchableOpacity, Text, Platform, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'


export const Deck = () => {
    return (
        <View style={style.container}> 
            <Text> Deck Name </Text>
            <Text> Number of cards </Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white
    },

    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    iosSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7, 
        height: 45, 
        marginLeft: 40,
        marginRight: 40
    },

    submitBtnTxt: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
        
    }
    
})