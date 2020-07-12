import React, { useState, useEffect } from "react"
import Tile from "../commons/Tile"

export default function HomeList() {
    const [cnt,setCnt] = useState(1)
    const [gap,setGap] = useState(100)
    const arr = new Array(12*cnt).fill(0)
    let html = arr.map(m=><Tile/>)

    setInterval(() => {
        setGap(document.body.scrollHeight-window.scrollY)
    }, 100);

    useEffect(()=>{
        if(gap<800) setCnt(cnt+1)
    },[gap])

    return(
        <div id="home-list" className="container-fluid">
            <div className="row" style={{"padding":"4px"}}>
                {html}
            </div>
        </div>
    )
}