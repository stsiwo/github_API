import { Type } from "./type";

export const selectTitle = (nextTitle) => {
    return {
        type: Type.SELECT_TITLE,
        nextTitle
    }
}

export const invalidateTitle = (targetTitle) => {
    return {
        type: Type.INVALIDATE_TITLE,
        targetTitle,
        didInvalidate: true
    }
}
export const startRequest = (targetTitle) => {
    return {
        type: Type.START_REQUEST,
        targetTitle,
        isFetching: true,
        didInvalidate: false,
        items: []
    }
}

export const receiveSuccessRequest = (targetTitle, json) => {
    return {
        type: Type.SUCCESS_REQUEST,
        targetTitle,
        isFetching: false, 
        items: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

// thunk

export const postFetchThunk = (targetTitle = '') =>  (dispatch, getState) => {
 
    let newTitleFlag = true // default is fetch new title 
    let shouldFetch = false 
    // two case: 1. fetch new title. 2. refresh current title
    // 1. get new title from arguments
    // 2. get current title from state
    if (targetTitle == '') {
        targetTitle = getState().currentTitle
        newTitleFlag = false
        dispatch(invalidateTitle(targetTitle))
    }
    // dispatch select title 
    dispatch(selectTitle(targetTitle))
    
    // check if fetch is necessary
    if (newTitleFlag) {
       // if new title fetch, should fetch 
        shouldFetch = true
    } else {
        // if current title refresh, check if 'didInvalidate' is true. should fetch
        if (getState().redditPosts[targetTitle].didInvalidate) {
            shouldFetch = true
        }
    }
    
    if (shouldFetch) {
        dispatch(startRequest(targetTitle))
        return fetch(`https://www.reddit.com/r/${targetTitle}.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveSuccessRequest(targetTitle, json)))
    }
}
