import homeReducer from "./homeReducer"
import {combineReducers} from "redux"

export default combineReducers({
    home: homeReducer
})