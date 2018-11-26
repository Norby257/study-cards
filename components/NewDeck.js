import React, { Component } from "react"
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Platform,
  StyleSheet,
} from "react-native"
import { NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import { Ionicons } from "@expo/vector-icons"
import { white, purple } from "../utils/colors"
import { timeToString, getDailyReminderValue, clearLocalNotification, setLocalNotification } from "../utils/helpers";
import {submitDeck, removeDeck, fetchDeckResults} from '../utils/api'
import {addDeck} from '../actions/'
// functions add Deck

//   this is class component bc it updates state

// this is going to be a controlled component 


/* 
pseudocode for submitting a new question and adding it to the redux store 
from helpers file - import getData function(?), timeToString, dailyreminder, clear and set notifications
//   so for that getDataFunction comment - maybe correspond to getMetaMetricInfo via Quiz info? 
import submit question and remove question from ../utils.api
//   import the relevant action from actions (in this case, addQuestion)
//  what would be in state? just title for now? 
//   map state to props 
//  then at end of the file - connect mapStateToProps(NewDeck)
*/ 

function AddDeck({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
         styles.iosSubmitBtn
      }
    >
      <Text style={styles.submitBtnTxt}> Submit </Text>
    </TouchableOpacity>
  )
}

class NewDeck extends Component {
  state = {
    title: ''
  }

  //  functions here
  //   submit  function
  submit = () => {
    // define deck here 
    const key = timeToString()
    // const title = this.state
    const deck = this.state
    this.props.dispatch(addDeck({
      [key]: deck
    }))
    //   update state back to blank 
    this.setState(()=> {
      deck: ''
    })
    this.toHome()
    submitDeck({key, deck})
    // clearLocalNotification()
    // .then(setLocalNotification)
  }
  //   reset function
  reset = () => {
    const key = timeToString()
    this.props.dispatch(addDeck({
      [key]: getDailyReminderValue()
    }))
    this.toHome()
    removeDeck(key)
  }
  //   TODO: fix the undefined is not an object
//  
  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({
      key: 'NewDeck'
    }))
  }
  render() {
    const decks = fetchDeckResults()
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={{borderColor: 'gray'}}> What is the title of your new deck? </Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Title of Deck"
            onChangeText ={title => this.setState({title})}

            //   onChangeText={(text) => this.setState({text})}
            //   fix bug with this! error on onPress 
          />
        </View>
        <AddDeck style={styles.iosSubmitBtn} onPress={()=> this.submit(this.state)} />
      </View>
    )
  }
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20
  },

  submitBtnTxt: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30
  }
})



function mapStateToProps(state) {
  return state

}
export default connect(mapStateToProps) (NewDeck)