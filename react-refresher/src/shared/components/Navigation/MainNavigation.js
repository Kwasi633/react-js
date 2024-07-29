import React from "react";
import { Link } from 'react-router-dom'

import NavLinks from "./NavLinks";
import MainHeader from "./MainHeader";
import './MainNavigation.css'
import SideDrawer from "./SideDrawer";



const MainNavigation = () => {
    return (
        <>
            <SideDrawer>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
           
            <h1 className="main-naviagtion__title">
                <Link to="/">
                Your places
                </Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>
        </>
    )
}

export default MainNavigation;