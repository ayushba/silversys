import React, { useState } from 'react';

import { Col } from 'antd';
import 'antd/dist/antd.css';
import { Form, Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/editProperty.css';

import { connect } from "react-redux";
import { addProperty } from "../js/actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addProperty: article => dispatch(addProperty(article))
    };
}

const ConnectdAddProperty = ({ addProperty }) => {

    const [newPGDetails, setNewPGDetails] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form new submit-->>> ', event);
        addProperty(newPGDetails);
    };

    const handleChange = (event) => {
        event.persist()
        console.log('form new-->>> ', event.target.id);
        setNewPGDetails({
            ...newPGDetails,
            [event.target.id]: event.target.value
        });
    };
    console.log('form new-->>> ', newPGDetails);

    return (
        <div style={{ display: "flex", padding: 20 }}>
            <div className="edit-form">
                <Form onSubmit={handleSubmit}>
                    <div className="contact-details pg-details">
                        <h2>Contact Details</h2>
                        <Form.Group>
                            <Form.Label>Paying Guest Name</Form.Label>
                            <Form.Control id="pgName" value={newPGDetails['pgName']} onChange={handleChange} placeholder="1234 Main St" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Title/Keywords</Form.Label>
                                <Form.Control id="title" value={newPGDetails['title']} onChange={handleChange} placeholder="Enter title" />
                            </Form.Group>

                            <Form.Group as={Col} className="form-column-response">
                                <Form.Label>Contact Person Name</Form.Label>
                                <Form.Control id="contactPersonName" value={newPGDetails['contactPersonName']} onChange={handleChange} placeholder="Owner Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Email</Form.Label>
                                <Form.Control id="email" value={newPGDetails['email']} onChange={handleChange} type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} className="form-column-response">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control id="mobile" value={newPGDetails['mobile']} onChange={handleChange} type="number" placeholder="Mobile Number" />
                            </Form.Group>
                        </Form.Row>
                    </div>
                    <div className="property-address-details pg-details">

                        <h2>Property Address Details</h2>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Address Line 1</Form.Label>
                                <Form.Control id="addLine1" value={newPGDetails['addLine1']} onChange={handleChange} placeholder="Address Line 1" />
                            </Form.Group>

                            <Form.Group as={Col} className="form-column-response">
                                <Form.Label>Address Line 2</Form.Label>
                                <Form.Control id="addLine2" value={newPGDetails['addLine2']} onChange={handleChange} placeholder="Address Line 2" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Landmark</Form.Label>
                                <Form.Control id="landmark" value={newPGDetails['landmark']} onChange={handleChange} placeholder="Landmark" />
                            </Form.Group>

                            <Form.Group as={Col} className="form-column-response">
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control id="postalCode" value={newPGDetails['postalCode']} onChange={handleChange} type="number" placeholder="Postal Code" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group >
                            <Form.Label>Your Property Address</Form.Label>
                            <Form.Control id="address" value={newPGDetails['address']} onChange={handleChange} placeholder="1234 Main St" />
                        </Form.Group>

                    </div>
                    <div className="property-details pg-details-options">

                        <h2>Property Details</h2>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Provider Type</Form.Label>
                                <Form.Control as="select" id="providerType" value={newPGDetails['providerType']} onChange={handleChange} defaultValue="Owner">
                                    <option value="Owner">Owner</option>
                                    <option value="Agent">Agent</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Available for</Form.Label>
                                <Form.Control as="select" id="availableFor" value={newPGDetails['availableFor']} onChange={handleChange} defaultValue="Girls">
                                    <option value="Girls">Girls</option>
                                    <option value="Boys">Boys</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Occupancy</Form.Label>
                                <Form.Control as="select" id="occupancy" value={newPGDetails['occupancy']} onChange={handleChange} defaultValue="Double">
                                    <option value="Double">Double</option>
                                    <option value="Single">Single</option>
                                    <option value="Triple">Triple</option>
                                    <option value="Four">Four</option>
                                    <option value="More than Four">More than Four</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Food/Meals  </Form.Label>
                                <Form.Control as="select" id="foodMeals" value={newPGDetails['foodMeals']} onChange={handleChange} defaultValue="Exclusive">
                                    <option value="Exclusive">Exclusive</option>
                                    <option value="Inclusive">Inclusive</option>
                                    <option value="Inclusive Gas in Rent">Inclusive Gas in Rent</option>
                                    <option value="Exclusive Gas in Rent">Exclusive Gas in Rent</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Electricity</Form.Label>
                                <Form.Control as="select" id="electricity" value={newPGDetails['electricity']} onChange={handleChange} defaultValue="Inclusive in Rent">
                                    <option value="Inclusive in rent">Inclusive in Rent</option>
                                    <option value="Exclusive in rent">Exclusive in Rent</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Room Cooling</Form.Label>
                                <Form.Control as="select" id="roomCooling" value={newPGDetails['roomCooling']} onChange={handleChange} defaultValue="Room Cooler">
                                    <option value="Room Cooler">Room Cooler</option>
                                    <option value="Fan">Fan</option>
                                    <option value="Air Condition (Inclusive in Rent)">Air Condition (Inclusive in rent)</option>
                                    <option value="Air Condition (Exclusive in Rent)">Air Condition (Exclusive in rent)</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>No. of Seats available</Form.Label>
                                <Form.Control
                                    className="mobileBox"
                                    required
                                    name="mobile"
                                    type="number"
                                    id="seatsAvailable"
                                    value={newPGDetails['seatsAvailable']}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Rent per Month/Bed</Form.Label>
                                <Form.Control
                                    className="mobileBox"
                                    required
                                    name="mobile"
                                    type="number"
                                    id="rent"
                                    value={newPGDetails['rent']}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Deposit</Form.Label>
                                <Form.Control as="select" id="deposit" value={newPGDetails['deposit']} onChange={handleChange} defaultValue="1 Month">
                                    <option value="1 month">1 Month</option>
                                    <option value="2 month">2 Month</option>
                                    <option value="To be discussed">To Be Discussed</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Water Supply</Form.Label>
                                <Form.Control as="select" id="waterSupply" value={newPGDetails['waterSupply']} onChange={handleChange} defaultValue="Nomal">
                                    <option value="Nomal">Nomal</option>
                                    <option value="Uninteruppted">Uninteruppted</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Hot Water</Form.Label>
                                <Form.Control as="select" id="hotWater" value={newPGDetails['hotWater']} onChange={handleChange} defaultValue="Available">
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not Available</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Drinking Water Type</Form.Label>
                                <Form.Control as="select" id="drinkingWater" value={newPGDetails['drinkingWater']} onChange={handleChange} defaultValue="Normal">
                                    <option value="Normal">Normal</option>
                                    <option value="Filtered">Filtered</option>
                                    <option value="RO Available">RO Available</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Safety</Form.Label>
                                <Form.Control as="select" id="safety" value={newPGDetails['safety']} onChange={handleChange} defaultValue="Owner Safety">
                                    <option value="Owner Safety">Owner Safety</option>
                                    <option value="Shared Safety">Shared Safety</option>
                                    <option value="Tenant Safety">Tenant Safety</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Door Opening Timings</Form.Label>
                                <Form.Control as="select" id="doorOpeningTime" value={newPGDetails['doorOpeningTime']} onChange={handleChange} defaultValue="6am to 10pm">
                                    <option value="6am to 10pm">6am to 10pm</option>
                                    <option value="Any time">Any Time</option>
                                    <option value="Seperate door key given">Seperate Door Key Given</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Laundary</Form.Label>
                                <Form.Control as="select" id="laundary" value={newPGDetails['laundary']} onChange={handleChange} defaultValue="Self Arranged">
                                    <option value="Self Arranged">Self Arranged</option>
                                    <option value="In house">In House</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Parking</Form.Label>
                                <Form.Control as="select" id="parking" value={newPGDetails['parking']} onChange={handleChange} defaultValue="Not Available">
                                    <option value="Not Available">Not Available</option>
                                    <option value="Available">Available</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Bed Type</Form.Label>
                                <Form.Control as="select" id="bedType" value={newPGDetails['bedType']} onChange={handleChange} defaultValue="Available With Box">
                                    <option value="Available with box">Available With Box</option>
                                    <option value="Available without box">Available Without Box</option>
                                    <option value="Folding">Folding</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Locker</Form.Label>
                                <Form.Control as="select" id="locker" value={newPGDetails['locker']} onChange={handleChange} defaultValue="Available">
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not Available</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Table/chair</Form.Label>
                                <Form.Control as="select" id="tableChair" value={newPGDetails['tableChair']} onChange={handleChange} defaultValue="Available">
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not Available</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Internet</Form.Label>
                                <Form.Control as="select" id="internet" value={newPGDetails['internet']} onChange={handleChange} defaultValue="Available (Extra Charge)">
                                    <option value="Available Extra Charge">Available (Extra Charge)</option>
                                    <option value="Available (Inclusive in Rent)">Available (Inclusive in rent)</option>
                                    <option value="Not Available">Not Available</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="options-column-handle">
                                <Form.Label>Cable/TV</Form.Label>
                                <Form.Control as="select" id="cableTV" value={newPGDetails['cableTV']} onChange={handleChange} defaultValue="Not Available">
                                    <option value="Not Available">Not Available</option>
                                    <option value="Available (Extra Charge)">Available (Extra Charge)</option>
                                    <option value="Available (Inclusive in Rent)">Available (Inclusive in rent)</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="advertise-panel">
                Ayush
            </div>
        </div>
    );
}

// const EditProperty = connect(mapStateToProps)(ConnectdAddProperty);
const AddNewProperty = connect(null, mapDispatchToProps)(ConnectdAddProperty);

export default AddNewProperty;