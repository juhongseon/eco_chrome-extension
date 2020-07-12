import React from "react"
import {NavLink} from "react-router-dom"
import '../../css/Header.css'
import Filter from "./Filter"

export default function Header() {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink exact to={'/Home'} className="navbar-brand">Eco</NavLink>
                </div>
                <ul className="nav navbar-nav">
                    <li><NavLink to={'/Search'}>Search</NavLink></li>
                    <li><NavLink to={'/My'}>My</NavLink></li>
                </ul>
                <Filter/>
            </div>
        </nav>
    )
}