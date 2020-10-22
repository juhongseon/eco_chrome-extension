import { SHOW_LOGIN, HIDE_LOGIN, NO_ID, NO_PWD, AUTHORIZED, SET_LOGIN_RESULT } from "../actions/types";

const initialState = {
    visible: true,
    result: '',
    id: '',
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
                result: action.payload
            }
        case NO_PWD:
            return {
                ...state,
                visible: true,
                result: action.payload
            }
        case SET_LOGIN_RESULT:
            return {
                ...state,
                result: action.payload
            }
        case AUTHORIZED:
            return {
                ...state,
                visible: false,
                result: true,
                auth: action.payload.auth,
                id: action.payload.id
            }
        default: return state
    }
}