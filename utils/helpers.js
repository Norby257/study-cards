//   this is helpers file 
//   it is like an API file, with FN's that run and do stuff 

//   relevant react, react native and expo imports 
import React from 'react'
import {View, StyleSheet, AsyncStorage} from 'react-native'
import {FontAwesome, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons'
import {Notifications, Permissions} from 'expo'
import { Notification } from 'expo';



// set a notification key here - also google it

const NOTIFICATION_KEY = "studyCards:notifications"
export function getDecks() {
    //to do: return all of the decks, along with titles, questions, and answers
}


export function getDeck() {
    //   take in a single ID argument and return
    // the deck associated with that id 
}


export function saveDeckTitle() {
    // take in a single title argument and add it to the decks. 
}


export function addCardToDeck() {
    // take in two arguments, title and card, and will add the card 
    // to the list of questions for the deck with the associated title. 

} 

// daily reminder function 

export function getDailyReminderValue() {
    return {
        today: "Don't forget to do your quizzes!" 
    }
    
}

//   this gets time and converts to string 
export function timeToString (time = Date.now()) {
    const date = new Date(time)
    const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    return todayUTC.toISOString().split('T')[0]
  }

//   notification functions   -  clear, create, and set local notification 


//   clear local notification 

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}


// create notification  - this returns an object
export function createNotification() {
    return {
        title: "do your quiz!",
        body: "get yourself an edumacation",
        ios: {
            sound: true
        }
    }
}


// setLocalNotification  => be sure to use Async storage here too  
//   last thing here is to pass data from user / boolean 
export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
  //     check if user did quiz 
  //     set this for 8pm every day 
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(20)
    tomorrow.setMinutes(0)
    Notifications.scheduleLocalNotificationAsync(
        createNotification(),
        {
            time: tomorrow,
            repeat: 'day'
        }
    )
    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
}




