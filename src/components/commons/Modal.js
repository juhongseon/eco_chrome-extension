import React from 'react'
import '../../css/Modal.css'
import { useSelector, useDispatch } from 'react-redux'
import { hideModal } from '../../actions/modalActions'
import Emo from './Emo'

export default function Modal() {
    const dispatch = useDispatch()
    const modal = useSelector(state=>state.modal)
    const style = {
        display: modal.visible ? 'block' : 'none'
    }

    return(
        <div id="modal" style={style}>
            <div onClick={()=>{dispatch(hideModal())}} id="modal-background"></div>
            <div id="modal-popup">
                <div className="text-right">
                    <span onClick={()=>{dispatch(hideModal())}} id="modal-close">X</span>
                </div>
                <Emo/><Emo/><Emo/><Emo/><Emo/><Emo/><Emo/><Emo/>
            </div>
        </div>
    )
}