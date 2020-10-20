import { SHOW_SUGGEST, HIDE_SUGGEST, FETCH_SUGGEST } from "../actions/types"

const initialState = {
    visible: false,
    list: []
}

export default function(state=initialState,action) {
    switch(action.type) {
        case SHOW_SUGGEST:
            return {
                ...state,
                visible: true
            }
        case HIDE_SUGGEST:
            return {
                ...state,
                visible: false
            }
        case FETCH_SUGGEST:
            return {
                ...state,
                list: action.payload
            }
        default: return state
    }
}