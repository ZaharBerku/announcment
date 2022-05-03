/* eslint-disable no-case-declarations */
import {
    GET_DATA,
    POST_DATA,
    DELETE_DATA,
    SET_IS_HIDE,
    PUT_DATA
} from "./apiActions";

const initialState = {
    data: [],
    postData: {},
    putData: {},
};

const apiReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    const newData = [...state.data];

    switch (type) {
        case GET_DATA:
            return {...state, data: payload};
        case POST_DATA:
            return {...state, data:[...state.data, payload]};
        case PUT_DATA:
            const findIndex = newData.findIndex(element => element.id === payload.id);
            newData[findIndex] = payload;
            return {...state, data: newData};
        case DELETE_DATA:
            const filterData = newData.filter(element=> element.id !== payload);
            return {...state, data: filterData};
        case SET_IS_HIDE:
            return {...state, data: payload};
        default:
            return state;
    }
};

export default apiReducer;