import { SHOW_MODAL, HIDE_MODAL, SET_IMGSRC } from "../actions/types"

const initialState = {
    visible: false,
    imgsrc: '',
    changed: 0
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
        case SET_IMGSRC:
            return {
                ...state,
                imgsrc: action.payload,
                changed: state.changed+1
            }
        default: return state
    }
}