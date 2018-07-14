import {FETCH_DATA_SUCCESS} from "../constants/Content";


export function getItems(state = [], action) {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}