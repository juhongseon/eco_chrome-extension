import React, { useEffect } from 'react'
import '../../css/Modal.css'
import { useSelector, useDispatch } from 'react-redux'
import { hideModal } from '../../actions/modalActions'
import Emo from './Emo'
import { setFavorite } from "../../actions/myActions"

export default function Modal() {
    const dispatch = useDispatch()
    useEffect(()=>{
        const initFavArr = JSON.parse(document.getElementById('init').value)
        dispatch(setFavorite(initFavArr))
        document.getElementById('init').value = JSON.stringify(initFavArr)
    },[])

    const my = useSelector(state=>state.my)
    const favArr = my.favorite
    const myChanged = my.changed

    useEffect(()=>{
        document.getElementById('init').value = JSON.stringify(favArr)
        document.getElementById('init').click()
    },[myChanged])

    

    const modal = useSelector(state=>state.modal)
    const style = {
        display: modal.visible ? 'block' : 'none'
    }
    const imgsrc = modal.imgsrc
    const changed = modal.changed
    useEffect(()=>{
        document.getElementById('emo-imgsrc').click()
    },[changed])

    return(
        <div id="modal" style={style}>
            <div onClick={()=>{dispatch(hideModal())}} id="modal-background"></div>
            <div id="modal-popup">
                <div className="text-right">
                    <span onClick={()=>{dispatch(hideModal())}} id="modal-close">X</span>
                </div>
                <Emo imgsrc='1111'/>
                <Emo imgsrc='2222'/>
                <Emo imgsrc='3333'/>
                <Emo imgsrc='4444'/>
                <Emo imgsrc='5555'/>
                <Emo imgsrc='6666'/>
                <Emo imgsrc='7777'/>
                <Emo imgsrc='8888'/>
                <Emo imgsrc='9999'/>
                <Emo imgsrc='1111'/>
                <Emo imgsrc='2222'/>
                <Emo imgsrc='3333'/>
                <Emo imgsrc='4444'/>
                <Emo imgsrc='5555'/>
                <Emo imgsrc='6666'/>
                <Emo imgsrc='7777'/>
                <Emo imgsrc='8888'/>
                <Emo imgsrc='9999'/>
            </div>
            <input type="hidden" id="emo-imgsrc" value={imgsrc}/>
        </div>
    )
}