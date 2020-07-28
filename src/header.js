import React, { useState } from 'react';
import './App.css';

import SideMenu from './sidemenu';

import { FaBars } from 'react-icons/fa';

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
            </div>
            {showSideMenu && <SideMenu />}
        </>
    );
}

export default Header;
