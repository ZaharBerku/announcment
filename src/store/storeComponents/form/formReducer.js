import{
    IS_OPEN,
    GET_URL_PHOTO,
} from "./formActions";

const initialState = {
    isOpen: false,
    photo: null,
};



const formReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch(type){
        case IS_OPEN:
            return {...state, isOpen: payload}; 
        case GET_URL_PHOTO:
            return {...state, photo: payload};
        default:
            return state;
    }
};

export default formReducer;