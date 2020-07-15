import { SET_HOME_FILTER1, SET_HOME_FILTER2 } from "../actions/types";

const initialState = {
    filter1: 'author',
    filter2: 'favorite',
    list: []
}

export default function(state=initialState,action) {
    switch(action.type) {
        case SET_HOME_FILTER1:
            return {
                ...state,
                filter1: action.payload
            }
        case SET_HOME_FILTER2:
            return {
                ...state,
                filter2: action.payload
            }
        default: return state
    }
}