import Axios from "axios"
import { SERVER_URL } from "../const/const"
import { SHOW_SUGGEST, HIDE_SUGGEST, FETCH_SUGGEST } from "./types"

export const showSuggest = ()=>dispatch=>{
    dispatch({
        type: SHOW_SUGGEST
    })
}

export const hideSuggest = ()=>dispatch=>{
    dispatch({
        type: HIDE_SUGGEST
    })
}

export const fetchSuggest = (filter1)=>dispatch=>{
    Axios.get(SERVER_URL+'/'+filter1+'_list').then((res)=>{
        dispatch({
            type: FETCH_SUGGEST,
            payload: res.data
        })
    })
}