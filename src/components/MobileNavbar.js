import {Link as LinkRouter} from "react-router-dom";
import React from "react";
import {useState} from "react";
import {MobileNavData} from "./MobileNavData"

const MobileNavbar = () => {

    const [visibility, setVisibility] = useState(false);

    const showSidebar = () => setVisibility(!visibility);

    return (
        <div className="mobileNavigation">
            <div id="menu__toggle" style={{display: visibility ? "none" : "flex"}}>
                <label className="menu__btn" htmlFor="menu__toggle" onClick={showSidebar}>
                    <span></span>
                </label>
            </div>
            <div className='navbar'>
                <LinkRouter to='#' className='menu-bars' onClick={showSidebar}></LinkRouter>
            </div>
            <nav className={visibility ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    {MobileNavData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <LinkRouter to={item.path}>
                                    <span>{item.title}</span>
                                </LinkRouter>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>

    )
}

export default MobileNavbar