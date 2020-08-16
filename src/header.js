import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import rohiniPglogo from './images/RPGlogo.png';

import SideMenu from './sidemenu';


const Header = () => {

    const [showSideMenu, setShowSideMenu] = useState(false);

    const handleSideMenu = () => {
        console.log('handleSideMenu--->>> ', !showSideMenu);
        setShowSideMenu(!showSideMenu);
    }

    return (
        <>
            <div className="header">
                <FaBars onClick={handleSideMenu} style={{ cursor: "pointer" }} />
                <a href="/">
                    <img src={rohiniPglogo} />
                </a>
            </div>
            {showSideMenu && <SideMenu />}
        </>
    );
}

export default Header;
