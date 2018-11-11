// all library and component imports go here 
// when you add navigation, install react-navigation 
import React from 'react';
import {Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import {setLocalNotifications, setLocalNotification} from './utils/helpers'
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

import {createBottomTabNavigator, createStackNavigator}  from 'react-navigation'

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
      activeTintColor: lightBlue,
      tabBarIcon: ({tintColor}) => <FontAwesome name='home' size={30} color={tintColor} />
    }
  },


 
 
  NewDeck: {
    screen: NewDeck,
   navigationOptions: {
      activeTintColor: lightBlue, 
      tabBarLabel: 'New Deck',
      tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />


    }

  }
})




//   this is the main nav, which has tabs for the home screen 
// nest the tabs in the main navigator 
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

// TODO: nav to indiv deck here, too
//   for now I have moved this into to main nav 
//   cuz when I have a list of decks, user can tap one 
//   and then view it 

Deck: {
  screen: Deck,
  navigationOptions: {
    headerTintColor: lightBlue,
    tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor} />
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

  componentDidMount() {
    setLocalNotification()
  }
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


