import { SET_HOME_FILTER1, SET_HOME_FILTER2, FETCH_NEXT_PAGE, SET_KEYWORD, ADD_KEYWORD } from "../actions/types";

const initialState = {
    filter1: 'title',
    filter2: 'recent',
    keyword: '',
    currpage: 0,
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
                filter2: action.payload.filter2,
                list: action.payload.data
            }
        case SET_KEYWORD:
            return {
                ...state,
                keyword: action.payload
            }
        case ADD_KEYWORD:
            return {
                ...state,
                keyword: state.keyword+' '+action.payload+' '
            }
        case FETCH_NEXT_PAGE:
            if(action.payload.currpage==0) {
                return {
                    ...state,
                    filter1: action.payload.filter1,
                    filter2: action.payload.filter2,
                    keyword: action.payload.keyword,
                    currpage: 1,
                    list: action.payload.data
                }
            }
            return {
                ...state,
                currpage: action.payload.currpage+1,
                list: state.list.concat(action.payload.data)
            }
        default: return state
    }
}