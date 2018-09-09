import { combineReducers } from "redux";
import { Type } from "../actions/type";

const selectTitle = (state = 'reactjs', action) => {
    switch(action.type) {
        case Type.SELECT_TITLE:
            return action.nextTitle
        default: 
            return state
    }
} 

const getRedditPost = (state = {}, action) => {
    switch(action.type) {
        case Type.INVALIDATE_TITLE:
            return { // this might need fix...
                ...state,
                didInvalidate: action.didInvalidate
            }
        case Type.START_REQUEST: 
            return {
                ...state,
                isFetching: action.isFetching,
                didInvalidate: action.didInvalidate,
                items: action.items
            }
        case Type.SUCCESS_REQUEST: 
            return {
                ...state,
                isFetching: action.isFetching,
                items: action.items,
                receivedAt: action.receivedAt
            }
        default: 
            return state
    }
}

const getRedditPosts = (state = {}, action) => {
   console.log(action) 
    switch(action.type) {
        case Type.INVALIDATE_TITLE:
        case Type.START_REQUEST:
        case Type.SUCCESS_REQUEST:
            return {
                ...state,
                [action.targetTitle]: getRedditPost(state[action.targetTitle], action)
            }
        default:
            return state
    }
}
const rootReducer = combineReducers({
    currentTitle: selectTitle,
    redditPosts: getRedditPosts
})

export default rootReducer 
