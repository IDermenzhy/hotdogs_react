import {ITEMS_FETCH_DATA_SUCCESS} from "../constants/Content";


export function getItems(state = [], action) {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.items;
        default:
            return state;
    }
}