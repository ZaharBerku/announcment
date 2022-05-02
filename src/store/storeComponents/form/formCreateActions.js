import {
    IS_OPEN,
    GET_URL_PHOTO,
} from "./formActions";

export const setIsOpen = (isOpen) => ({ type: IS_OPEN, payload: isOpen });

export const getUrlPhoto = (event) => dispatch => {
    if (event) {
        const { files } = event.target;
        const reader = new FileReader();
        reader.onload = ev => {
            const { result } = ev.target;
            dispatch({ type: GET_URL_PHOTO, payload: result });
        };
        reader.readAsDataURL(...files);
    } else {
        dispatch({ type: GET_URL_PHOTO, payload: null });
    }

};
