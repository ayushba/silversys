import { ADD_PROPERTY } from "../constants/action-types";

export function addProperty(payload) {
    return { type: ADD_PROPERTY, payload };
}