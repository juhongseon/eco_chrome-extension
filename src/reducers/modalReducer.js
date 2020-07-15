import { SHOW_MODAL, HIDE_MODAL } from "../actions/types"

const initialState = {
    visible: false
}

export default function(state=initialState,action) {
    switch(action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                visible: true
            }
        case HIDE_MODAL:
            return {
                ...state,
                visible: false
            }
        default: return state
    }
}