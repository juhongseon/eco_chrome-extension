import { SAMPLE_TYPE } from "../actions/types";

const initialState = {
    sampleData: 'sample data'
}

export default function (state=initialState,action) {
    switch(action.type) {
        case SAMPLE_TYPE:
            return {
                ...state,
                sampleData: action.payload
            }
        default: return state
    }
}