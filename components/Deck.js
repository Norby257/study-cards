import React, { Component } from "react"
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet
} from "react-native"
import NewQuestion from './NewQuestion'
import Quiz from './Quiz'
import { Ionicons } from "@expo/vector-icons"
import { white, purple } from "../utils/colors"




function AddCard  ({ onPress}) {
  
  return (
    <TouchableOpacity 
   
      
      style={
        Platform.OS === "ios" ? styles.iosSubmitBtn : styles.androidSubmitBtn
      }
    >
      <Text style={styles.submitBtnTxt}> Add Card </Text>
    </TouchableOpacity>
  )

}

function StartQuiz({ onPress  }) {
  return (
    <TouchableOpacity

      style={
        Platform.OS === "ios" ? styles.iosSubmitBtn : styles.androidSubmitBtn
      }
    >
      <Text style={styles.submitBtnTxt}> Start Quiz </Text>
    </TouchableOpacity>
  )
}

//   create Stack object here  

class Deck extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={(styles.row, styles.center)}>
          <Text> Deck Name </Text>
          <Text> Number of cards </Text>
        </View>

        <View>
          <AddCard style={styles.iosSubmitBtn}
          onPress={()=> console.log("ADD CARD CLCICKED")}
          onPress={() => this.props.navigation.navigate(
            'NewQuestion'
          )} />
        </View>
        <View>
          <StartQuiz style={styles.iosSubmitBtn} 
          onPress={()=> this.props.navigation.navigate('Quiz')}/>
        </View>
      </View>
    )
  }
}

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

export default Deck
