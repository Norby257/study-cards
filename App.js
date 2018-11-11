// all library and component imports go here 
// when you add navigation, install react-navigation 
import React from 'react';
import {Ionicons, FontAwesome} from '@expo/vector-icons'
//   react native dependencies 
import {
  Text,
  View,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback, // only on android
  TouchableOpacity,
  TouchableWithoutFeedback,
  Slider 
} from 'react-native'

import {createBottomTabNavigation, createBottomTabNavigator, createStackNavigator}  from 'react-navigation'

import DeckList from './containers/DeckList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import {white, purple, lightBlue, darkerBlue, darkblue} from './utils/colors'


//   this is for tab navigation at the bottom of screen 
const Tabs = createBottomTabNavigator({
  DeckList : {
    screen: DeckList,
    tabBarOptions: {
      activeTintColor: lightBlue
    }
  },

  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: lightBlue
    }

  },
 
 
  NewDeck: {
    screen: NewDeck,
    tabBarOptions: {
      activeTintColor: lightBlue
    }

  }
})


//   this is the main nav, which has tabs for the home screen 
//   strong colors are just for testing purposes
const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
      title: 'Home',
      headerStyle: {
        backgroundColor: lightBlue
      }
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
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{height: 20, flex: 1}}>
        <MainNavigator />
        </View>
      </View>
    );
  }
}


//   for now, will use this space to create stylesheets 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: "#E53224",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  
  }
});


