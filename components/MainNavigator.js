import React from "react"
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons"

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation"
import DeckList from "../containers/DeckList"
import Deck from "./Deck"
import Quiz from "./Quiz"
import NewDeck from "./NewDeck"
import NewQuestion from "./NewQuestion"
import { white, purple, lightBlue, darkerBlue, darkblue } from "../utils/colors"

export const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    tabBarOptions: {
      activeTintColor: lightBlue,
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )
    }
  },

  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      activeTintColor: lightBlue,
      tabBarLabel: "New Deck",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="plus-square" size={30} color={tintColor} />
      )
    }
  }
})

export const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
      title: "Home",
      headerStyle: {
        backgroundColor: lightBlue
      }
    }
  },

  // TODO: nav to indiv deck here, too
  //   for now I have moved this into to main nav
  //   cuz when I have a list of decks, user can tap one
  //   and then view it

  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: lightBlue,
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons
          name="cards-outline"
          size={30}
          color={tintColor}
        />
      )
    }
  },

  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      headerTintColor: darkblue,
      headerStyle: {
        backgroundColor: darkerBlue
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: darkerBlue
    }
  }
})
