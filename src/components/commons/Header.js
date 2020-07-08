import React, { Fragment } from "react"
import {NavLink} from "react-router-dom"
import '../../css/Header.css'
import Filter from "./Filter"

export default function Header() {
    return (
        <Fragment>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink to={'/'} className="navbar-brand">Eco</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><NavLink to={'/search'}>Search</NavLink></li>
                        <li><NavLink to={'/my'}>My</NavLink></li>
                    </ul>
                    <Filter/>
                </div>
            </nav>
        </Fragment>
    )
}