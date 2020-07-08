import { SET_HOME_FILTER1, SET_HOME_FILTER2 } from "./types"

export const setHomeFilter1 = (type)=>dispatch=>{
    dispatch({
        type: SET_HOME_FILTER1,
        payload: type
    })
}

export const setHomeFilter2 = (order)=>dispatch=>{
    dispatch({
        type: SET_HOME_FILTER2,
        payload: order
    })
}