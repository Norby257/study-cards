import React, { Component } from "react"
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { white, purple, green } from "../utils/colors"

//   other functions to render buttons
//   incorrect button - RED
//   correct button - GREEN

function CorrectButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        Platform.OS === "ios" ? styles.iosSubmitBtn : styles.androidSubmitBtn
      }
    >
      <Text style={styles.submitBtnTxt}> Correct </Text>
    </TouchableOpacity>
  )
}

function IncorrectButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        Platform.OS === "ios" ? styles.iosSubmitBtn : styles.androidSubmitBtn
      }
    >
      <Text style={styles.submitBtnTxt}> Incorrect </Text>
    </TouchableOpacity>
  )
}

class Quiz extends Component {

  //   state should contain
  //   questions f
  //   score 
  //   number right 
  //  number incorrect 
  render() {

    const {navigation} = this.props 
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text> Question </Text>
        </View>
        <View style={styles.row}>
          <Text> Answer </Text>
        </View>
        <View>
          <CorrectButton style={styles.iosSubmitBtn} />
          <IncorrectButton style={styles.iosSubmitBtn} />
        </View>
      </View>
    )
  }
}

// style sheet

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

// export component

export default Quiz
