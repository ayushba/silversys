import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';
import NavigationLinks from './navigationslinks';

const SideMenu = () => {

    const [showSideMenu, setShowSideMenu] = useState(false);

    const handleSideMenu = () => {
        console.log('handleSideMenu--->>> ', !showSideMenu);
        setShowSideMenu(!showSideMenu);
    }

    return (
        <div className="sidemenu">
            <div className="side-menu-profile-section">

            </div>
            <NavigationLinks />
        </div>
    );
}

export default SideMenu;
