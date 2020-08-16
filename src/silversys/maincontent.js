import React from 'react';

import './css/maincontent.css';

import noImage from '../images/no_image.jpg';

const MainContent = () => {
    return (
        <div className="property-listed">
            <div className="list-heading">
                <h4><u>Available Paying Guest List</u></h4>
            </div>
            <div className="paying-guests-property">
                <img src={noImage} />
                <div className="property-outlet-details">
                    <div className="property-detail-heading">
                        Ayush
                        <button>
                            Check It
                        </button>
                    </div>
                    <div className="other-details">
                        <div>
                            <h5>Available for</h5>
                            <p>Ayuhs</p>
                        </div>
                        <div>
                            <h5>Location</h5>
                            <p>Ayuhs</p>
                        </div>
                        <div>
                            <h5>Occupancy type</h5>
                            <p>Ayuhs</p>
                        </div>
                        <div>
                            <h5>Meal</h5>
                            <p>Ayuhs</p>
                        </div>
                        <div>
                            <h5>Room cooling</h5>
                            <p>Ayuhs</p>
                        </div>
                        <div>
                            <h5>Provider</h5>
                            <p>Ayuhs</p>
                        </div>
                        <div>
                            <h5>Laundary</h5>
                            <p>Ayuhs</p>
                        </div>
                        <div>
                            <h5>Budget</h5>
                            <p>Ayuhs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="paying-guests-property">
                Bansal
                </div>
        </div>
    );
}

export default MainContent;
