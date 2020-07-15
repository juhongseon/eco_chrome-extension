import React, { useState, useEffect } from "react"
import Tile from "../commons/Tile"
import { useSelector } from "react-redux"

export default function HomeList() {
    const home = useSelector(state=>state.home)
    const filter1 = home.filter1
    const filter2 = home.filter2

    const [cnt,setCnt] = useState(1)
    const [gap,setGap] = useState(100)
    const arr = new Array(12*cnt).fill(0)
    let html = arr.map(m=><Tile title={filter1 + ' - ' + filter2}/>)

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