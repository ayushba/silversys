import React from 'react';

import { MdHotel, MdPeople, MdForum, MdPersonAdd } from 'react-icons/md';
import silverSysAdImage from '../images/silversys.jpg';

import './maincontent.css';

const AdvertisementPanelAndStats = () => {
    return (
        <>
            <div className="advertisement-panel">
                <img src={silverSysAdImage} />
            </div>
            <div className="dashborad-stats">
                <div className="stats-property-listed">
                    <span className="stats-icons"><MdHotel /></span>
                    <span className="stats-counts">
                        <p>Property Listed</p>
                        <h4>1</h4>
                    </span>
                </div>
                <div className="stats-new-followers">
                    <span className="stats-icons"><MdPeople /></span>
                    <span className="stats-counts">
                        <p>New Followers</p>
                        <h4>2</h4>
                    </span>
                </div>
                <div className="stats-new-comments">
                    <span className="stats-icons"><MdForum /></span>
                    <span className="stats-counts">
                        <p>New Comments</p>
                        <h4>3</h4>
                    </span>
                </div>
                <div className="stats-new-visitors">
                    <span className="stats-icons"><MdPersonAdd /></span>
                    <span className="stats-counts">
                        <p>New Visitors</p>
                        <h4>4</h4>
                    </span>
                </div>
            </div>
        </>
    );
}

export default AdvertisementPanelAndStats;
