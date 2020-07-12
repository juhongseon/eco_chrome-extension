import React from "react"

export default function Tile(props) {
    const imgsrc = props.imgsrc
    const title = props.title
    const author = props.author

    return (
        <div class="col-xs-4" style={{"padding":"4px"}}>
            <div class="thumbnail">
                <a href="/w3images/lights.jpg" target="_blank">
                    <img src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" alt="Lights" style={{"width":"100%"}}/>
                    <div class="caption" style={{"padding":"0px"}}>
                        <p style={{"marginBottom":"4px"}}>타이틀</p>
                        <p style={{"textAlign":"right","marginBottom":"0px"}}>작가이름</p>
                    </div>
                </a>
            </div>
        </div>
    )
}