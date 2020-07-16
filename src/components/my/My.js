import React from "react"
import "../../css/My.css"
import { useSelector } from "react-redux"

export default function My() {
    const my = useSelector(state=>state.my)
    const favArr = my.favorite

    return (
        <div id="my-container">
            <p>{JSON.stringify(favArr)}</p>
        </div>
    )
}