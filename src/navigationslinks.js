import React, { useState } from 'react';

import { GoHome, GoSearch } from 'react-icons/go';
import { GiHouseKeys, GiIsland, GiBugleCall, GiPhone } from 'react-icons/gi';

import { Modal } from 'antd';
import 'antd/dist/antd.css';

const NavigationLinks = () => {

    const [showSearchModal, setShowSearchModal] = useState(false);

    const handleSearchModal = () => {
        console.log('handleSideMenu--->>> ');
        setShowSearchModal(true);
    }
    const handleOk = e => {
        console.log('handleOk--->> ');
        setShowSearchModal(false);
    };

    const handleCancel = e => {
        console.log('handleCancel--->> ');
        setShowSearchModal(false);
    };

    return (
        <>
            <div className="side-menu-navigation-link" style={{ marginTop: 25 }}>
                <GoHome />
                <a href="/">Home</a>
            </div>
            <div className="side-menu-navigation-link">
                <GiIsland />
                <a href="/newProperty">Post New Property</a>
            </div>
            <div className="side-menu-navigation-link">
                <GiHouseKeys />
                <a href="/myproperty">My Property</a>
            </div>
            <div className="side-menu-navigation-link">
                <GiBugleCall />
                <a href="/myResponse">My Response</a>
            </div>
            <div className="side-menu-navigation-link">
                <GoSearch />
                <button onClick={handleSearchModal}>Search PG</button>
            </div>
            <div className="side-menu-navigation-link" style={{ marginTop: 20 }}>
                <GiPhone />
                <a href="/contactUs">Contact Us</a>
            </div>
            <Modal
                title="Basic Modal"
                visible={showSearchModal}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

            <div className="side-menu-footer">
                <h4>SILVER.SYS Info Tech</h4>
            </div>
        </>
    );
}

export default NavigationLinks;
