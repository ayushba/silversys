import { ADD_PROPERTY } from "../constants/action-types";
import propertiesDummyData from '../../dummyData/propertiesDummyData';

const initialState = {
    properties: propertiesDummyData
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_PROPERTY) {
        // state.properties.push(action.payload);
        return Object.assign({}, state, {
            properties: state.properties.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;