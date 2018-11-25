import {RECEIVE_DECKS, ADD_DECK} from '../actions/'
//   import deck data here and then set state equal to that 
import {DeckData} from '../utils/DeckData'
// /Users/noreenmadden/code/study-cards/utils/DeckData.js
//   as per mentor, try setting the initial state in the reducer 
//   this did not need to be split up into separate reducers yet 
// although that's prolly a good idea for refactoring it 
// since we have initial data I do not think I need to have a receive decks function 
//   need to remove that! 
function decks (state = DeckData, action)  {
    switch(action.type) {
        case RECEIVE_DECKS:
            return{
                ...state,
                ...action.decks
            }

        case ADD_DECK: 
            return {
                ...state,
                ...action.deck
            }
        default: 
            return state

    }
}

export default decks