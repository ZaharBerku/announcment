import {
    GET_DATA,
    POST_DATA,
    PUT_DATA,
} from "./apiActions";

const initialState = {
    data: [],
    postData: {},
    putData: {},
};

const apiReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case GET_DATA:
            return {...state, data: payload};
        case POST_DATA:
            return {...state, postData: payload};
        case PUT_DATA:
            return {...state, putData: payload};
        default:
            return state;
    }
};

export default apiReducer;