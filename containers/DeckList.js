import React, {Component} from 'react'
import {View, TouchableOpacity, Text, Platform, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {Deck} from '../components/Deck'

class DeckList extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <Deck> PLACEHOLDER TEXT </Deck>

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
    androidSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'

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