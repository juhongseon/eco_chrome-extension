import React from 'react'
import { useDispatch } from 'react-redux'
import { setImgsrc } from '../../actions/modalActions'

export default function Emo(props) {
    const imgsrc = props.imgsrc
    const dispatch = useDispatch()

    return(
        <div onClick={()=>{dispatch(setImgsrc(imgsrc))}} className="col-xs-4" style={{"padding":"4px","cursor":"pointer"}}>
            <div className="thumbnail">
                <img src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" alt="Lights" style={{"width":"100%"}}/>
            </div>
        </div>
    )
}