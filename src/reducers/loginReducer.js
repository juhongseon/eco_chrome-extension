import { SHOW_LOGIN, HIDE_LOGIN, NO_ID, NO_PWD, AUTHORIZED } from "../actions/types";

const initialState = {
    visible: true,
    result: '',
    auth: 'unauthorized'
}

export default function(state=initialState,action) {
    switch(action.type) {
        case SHOW_LOGIN:
            return {
                ...state,
                visible: true
            }
        case HIDE_LOGIN:
            return {
                ...state,
                visible: false
            }
        case NO_ID:
            return {
                ...state,
                visible: true,
                result: 'noid'
            }
        case NO_PWD:
            return {
                ...state,
                visible: true,
                result: 'nopwd'
            }
        case AUTHORIZED:
            return {
                ...state,
                visible: false,
                result: true,
                auth: action.payload
            }
        default: return state
    }
}