import { HIDE_MODAL, SHOW_MODAL, SET_IMGSRC } from "./types";

export const showModal = ()=>dispatch=>{
    dispatch({
        type: SHOW_MODAL
    })
}

export const hideModal = ()=>dispatch=>{
    dispatch({
        type: HIDE_MODAL
    })
}

export const setImgsrc = (imgsrc)=>dispatch=>{
    dispatch({
        type: SET_IMGSRC,
        payload: imgsrc
    })
}