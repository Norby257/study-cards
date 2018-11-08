import React, { Component } from "react"
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Platform,
  StyleSheet
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { white, purple } from "../utils/colors"

// functions add Deck

//   this is class component bc it updates state

function AddDeck({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        Platform.OS === "ios" ? styles.iosSubmitBtn : styles.androidSubmitBtn
      }
    >
      <Text style={styles.submitBtnTxt}> Submit </Text>
    </TouchableOpacity>
  )
}

class NewDeck extends Component {
  //   we can give this state but commenting out for now bc just views
  //  constructor(props) {
  //      super(props);
  //      this.state = {text: ''}
  //  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text> What is the title of your new deck? </Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={{ flex: 1, height: 40, backgroundColor: "red", alignItems: "center" }}
            placeholder="Title"

            //   onChangeText={(text) => this.setState({text})}
          />
        </View>
        <AddDeck style={styles.iosSubmitBtn} />
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

// export it
export default NewDeck
