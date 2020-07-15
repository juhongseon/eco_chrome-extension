import homeReducer from "./homeReducer"
import {combineReducers} from "redux"
import modalReducer from "./modalReducer"

export default combineReducers({
    home: homeReducer,
    modal: modalReducer
})