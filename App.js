//   react and redux dependencies
import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
//   react native dependencies
import { setLocalNotifications, setLocalNotification } from "./utils/helpers"

//   react native dependencies
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Slider
} from "react-native"

// components
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation"
import { MainNavigator } from "./components/MainNavigator"
import reducer from "./reducers/index"
import { white, purple, lightBlue, darkerBlue, darkblue } from "./utils/colors"
import {StudyCardsStatusBar} from './components/StudyCardsStatusBar'
import { Constants } from "expo"

export default class App extends React.Component {
  componentDidMount() {
    // setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <StudyCardsStatusBar
            backgroundColor={lightBlue}
            barStyle="light-content"
          />

          <View style={{ height: 20, flex: 1 }}>
            <MainNavigator />
          </View>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    backgroundColor: "#E53224",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  }
})
