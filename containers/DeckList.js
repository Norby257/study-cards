import React, {Component} from 'react'
import {View, TouchableOpacity, Text, Platform, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {connect} from 'react-redux'
import {AppLoading} from 'expo'
import {white, purple} from '../utils/colors'
import  {receiveDecks} from '../actions'
import {timeToString, getDailyReminderValue} from '../utils/helpers'

class DeckList extends Component {
    // just basing this off of fitness app for now 
    //   simple state 
    state = {
        ready: false
    }

    componentDidMount() {
        const {dispatch} = this.props
    }
    render() {
        return (
            <View style={styles.container}> 
                <Text> DECK LIST GOES HERE </Text>
                <Text> each individual DECK listed below </Text>

            </View> 

        )
    }
}





//   stylesheet here 
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


// map state to props here 
export default DeckList 