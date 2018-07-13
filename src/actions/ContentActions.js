import axios from "axios";
import {ITEMS_FETCH_DATA_SUCCESS} from "../constants/Content";

export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

export function itemsFetchData() {
    return dispatch => {
        axios.get('https://formula-test-api.herokuapp.com/menu')
            .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
            .catch(err => console.log(err));
    };
}

