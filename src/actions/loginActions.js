import Axios from "axios"
import { SERVER_URL } from "../const/const"
import { SHOW_LOGIN, HIDE_LOGIN, NO_ID, NO_PWD, AUTHORIZED } from "./types"

export const showLogin = ()=>dispatch=>{
    dispatch({
        type: SHOW_LOGIN
    })
}

export const hideLogin = ()=>dispatch=>{
    dispatch({
        type: HIDE_LOGIN
    })
}

export const tryLogin = (id,pwd)=>dispatch=>{
    Axios.get(SERVER_URL+'/login',{
        params: {
            id:id,
            pwd:pwd
        }
    }).then((res)=>{
        switch(res.data) {
            case 'noid': {
                dispatch({
                    type: NO_ID
                })
                return
            }
            case 'nopwd': {
                dispatch({
                    type: NO_PWD
                })
                return
            }
            default: {
                dispatch({
                    type: AUTHORIZED,
                    payload: res.data
                })
            }
        }
    })
}