import sampleReducer from "./sampleReducer"
import {combineReducers} from "redux"

export default combineReducers({
    sample: sampleReducer
})