import { combineReducers } from 'redux'
import * as actions from './actions'
// Reducer 
function Reducer(state, action) {
    switch (action.type) {

        case actions.login:
            return Object.assign({}, state, { user: action.user })

        case actions.next: 
            return Object.assign({}, state, { song: action.song })

        case actions.getmusiclist:
            return Object.assign({}, state, { musiclist: action.list })

        case actions.getsonglist:
            return Object.assign({}, state, { songlist: action.list })

        case actions.getplaylist:
            return Object.assign({}, state, { playlist: action.list })

        case actions.addsongs: 
            return Object.assign({}, state, { songs: action.songs })  

        case actions.gethistory: 
            return Object.assign({}, state, { songlist: action.list })   
                   
        default:
            return state
    }
}
export default Reducer
