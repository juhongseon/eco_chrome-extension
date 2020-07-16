import homeReducer from "./homeReducer"
import {combineReducers} from "redux"
import modalReducer from "./modalReducer"
import myReducer from "./myReducer"

export default combineReducers({
    home: homeReducer,
    modal: modalReducer,
    my: myReducer
})