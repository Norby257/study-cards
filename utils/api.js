import {AsyncStorage} from 'react-native'
import {DECK_STORAGE_KEY} from './asyncStorage'

// add deck 

export function submitDeck({deck, key}) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [key]: deck
    }))
}
//   fetch calendar results?
 export function fetchDeckResults() {
     return AsyncStorage.getItem(DECK_STORAGE_KEY)
 }


//   remove deck 
export function removeDeck(key) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results)=> {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}