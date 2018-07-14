import axios from "axios";
import {
    FETCH_DATA_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS
} from "../constants/Content";

export function fetchDataStart() {
    return {
        type: FETCH_DATA_START,
    };
}
export function fetchDataSuccess(items) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: items
    };
}
export function fetchDataFailure(err) {
    return {
        type: FETCH_DATA_FAILURE,
        payload: err,
        error: true
    };
}

export function fetchData() {
    return dispatch => {
        dispatch(fetchDataStart());
        try {
            axios.get('https://formula-test-api.herokuapp.com/menu')
                .then((response) => dispatch(fetchDataSuccess(response.data)));
        }
        catch (err) {
            dispatch(fetchDataFailure(err));
        }

    };
}

