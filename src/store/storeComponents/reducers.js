import { combineReducers } from "redux";
import apiReducer from "./api/apiReducer";
import formReducer from "./form/formReducer";

const reducers = combineReducers({
    api: apiReducer,
    form: formReducer,
});


export default reducers;