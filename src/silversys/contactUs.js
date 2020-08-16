import React, { useState } from 'react';

import './css/contactUs.css';

import img_5terre from '../images/img_5terre.jpg';
import img_forest from '../images/img_forest.jpg';
import img_lights from '../images/img_lights.jpg';
import img_mountains from '../images/img_mountains.jpg';

import CarouselPanel from './carousel';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return { properties: state.properties };
};

const imageArray = [
    img_5terre,
    img_forest,
    img_lights,
    img_mountains
]

const ConnectdContactUs = ({ properties }) => {

    const [pgDetails, setPGDetails] = useState(properties[0]);

    return (
        <>
            <CarouselPanel imageArray={imageArray} />
            <div style={{ display: "flex", padding: 20 }}>
                <div className="detail-table">
                    <table>
                        <tbody>
                            <tr>
                                <th>Available For</th>
                                <td>{pgDetails['availableFor']}</td>
                            </tr>
                            <tr>
                                <th>Occupancy</th>
                                <td>{pgDetails['occupancy']}</td>
                            </tr>
                            <tr>
                                <th>Meal</th>
                                <td>{pgDetails['foodMeals']}</td>
                            </tr>
                            <tr>
                                <th>Room Cooling</th>
                                <td>{pgDetails['roomCooling']}</td>
                            </tr>
                            <tr>
                                <th>Hot Water</th>
                                <td>{pgDetails['hotWater']}</td>
                            </tr>
                            <tr>
                                <th>Provider Type</th>
                                <td>{pgDetails['providerType']}</td>
                            </tr>
                            <tr>
                                <th>Drinking Water</th>
                                <td>{pgDetails['drinkingWater']}</td>
                            </tr>
                            <tr>
                                <th>Electricity</th>
                                <td>{pgDetails['electricity']}</td>
                            </tr>
                            <tr>
                                <th>Bed Type</th>
                                <td>{pgDetails['bedType']}</td>
                            </tr>
                            <tr>
                                <th>Chair Table</th>
                                <td>{pgDetails['tableChair']}</td>
                            </tr>
                            <tr>
                                <th>Water Supply</th>
                                <td>{pgDetails['waterSupply']}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <th>PG address</th>
                                <td>{pgDetails['address']}</td>
                            </tr>
                            <tr>
                                <th>Contact Person</th>
                                <td>{pgDetails['contactPersonName']}</td>
                            </tr>
                            <tr>
                                <th>Contact Number</th>
                                <td>{pgDetails['mobile']}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{pgDetails['email']}</td>
                            </tr>
                            <tr>
                                <th>Locker</th>
                                <td>{pgDetails['locker']}</td>
                            </tr>
                            <tr>
                                <th>Parking</th>
                                <td>{pgDetails['parking']}</td>
                            </tr>
                            <tr>
                                <th>Laundary</th>
                                <td>{pgDetails['laundary']}</td>
                            </tr>
                            <tr>
                                <th>security</th>
                                <td>{pgDetails['deposit']}</td>
                            </tr>
                            <tr>
                                <th>Internet</th>
                                <td>{pgDetails['internet']}</td>
                            </tr>
                            <tr>
                                <th>Cable TV</th>
                                <td>{pgDetails['cableTV']}</td>
                            </tr>
                            <tr>
                                <th>Safety Type</th>
                                <td>{pgDetails['safety']}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="advertise-panel">
                    Ayush
            </div>
            </div>
        </>
    );
}

const ContactUs = connect(mapStateToProps)(ConnectdContactUs);
// const ContactUs = connect(null, mapDispatchToProps)(ConnectdContactUs);

export default ContactUs;