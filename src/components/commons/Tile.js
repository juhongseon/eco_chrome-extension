import React from "react"
import { useDispatch } from "react-redux"
import { showModal } from "../../actions/modalActions"

export default function Tile(props) {
    const dispatch = useDispatch()
    const imgsrc = props.imgsrc
    const title = props.title
    const author = props.author

    return (
        <div onClick={()=>{dispatch(showModal())}} className="col-xs-4" style={{"padding":"4px","cursor":"pointer"}}>
            <div className="thumbnail">
                <img src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" alt="Lights" style={{"width":"100%"}}/>
                <div className="caption" style={{"padding":"0px"}}>
                    <p style={{"marginBottom":"4px"}}>{title}</p>
                    <p style={{"textAlign":"right","marginBottom":"0px"}}>작가이름</p>
                </div>
            </div>
        </div>
    )
}