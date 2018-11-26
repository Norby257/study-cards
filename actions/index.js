export const RECEIVE_DECKS='RECEIVE_DECKS'
export const ADD_DECK='ADD_DECK'
export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}



 /* 

 PSEUDOCODE 
 how to solve this - we are going to set the initial state in the reducer. 
 TO DO THIS - create store must have a second argument, else it is undefined 
 steps: 
 1) make a root reducer 
 2) all other reducers should be in their separate files and imported into the root reducer
 3) where you set up the store, import root reducer -instead of reducer as arg, use root reducer

 
 */ 