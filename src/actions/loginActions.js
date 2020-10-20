import Axios from "axios"
import { SERVER_URL } from "../const/const"
import { SHOW_LOGIN, HIDE_LOGIN, NO_ID, NO_PWD, AUTHORIZED, SET_LOGIN_RESULT } from "./types"

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

export const setLoginResult = (msg)=>dispatch=>{
    dispatch({
        type: SET_LOGIN_RESULT,
        payload: msg
    })
}

export const tryLogin = (id,pwd)=>dispatch=>{
    Axios.get(SERVER_URL+'/login',{
        params: {
            id: id,
            pwd: pwd
        }
    }).then((res)=>{
        switch(res.data) {
            case 'noid': {
                dispatch({
                    type: NO_ID,
                    payload: '아이디가 틀렸습니다.'
                })
                return
            }
            case 'nopwd': {
                dispatch({
                    type: NO_PWD,
                    payload: '비밀번호가 틀렸습니다.'
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

export const trySignin = (id,pwd)=>dispatch=>{
    Axios.get(SERVER_URL+'/signin',{
        params: {
            id: id,
            pwd: pwd
        }
    }).then((res)=>{
        if(res.data=='success') {
            dispatch({
                type: SET_LOGIN_RESULT,
                payload: '회원가입에 성공하였습니다. 로그인하세요.'
            })
            return
        } else {
            dispatch({
                type: SET_LOGIN_RESULT,
                payload: '이미 존재하는 아이디입니다.'
            })
        }
    })
}