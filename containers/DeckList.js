import React, {Component} from 'react'
import {View, TouchableOpacity, Text, Platform, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {connect} from 'react-redux'
import {AppLoading} from 'expo'
import {white, purple} from '../utils/colors'
import  {receiveDecks, addDeck} from '../actions'
import {fetchDeckResults} from '../utils/api'
import {timeToString, getDailyReminderValue} from '../utils/helpers'

//   TODO 


//   in component did mount, make your fetch results function
//   on press, navigate to the individual deck  
//   see History.js file from fitness app  
class DeckList extends Component {
    // just basing this off of fitness app for now 
    //   simple state 
    state = {
        ready: false
    }

    componentDidMount() {
        const {dispatch} = this.props

        fetchDeckResults()
        .then((decks)=> dispatch(receiveDecks(decks)))
        .then(()=> this.setState(()=> ({ready:true})))
        
    }

        //   render Item function 
    renderItem = ({...decks},key) => {
        //   make an item a button that will nav to the indiv deck 
    }
    render() {
        const {decks} = this.props
        const {ready} = this.state

        if (ready === false) {
            return <AppLoading />
        }
        return (
            <View style={styles.container}> 
              <Text> List of decks here </Text>
              <Text> Clik on an indiv deck to nav to it </Text>

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


// map state to props here ; include this in export default 
function mapStateToProps(decks) {
    return {
        decks
    }
}
export default connect(mapStateToProps) (DeckList) 