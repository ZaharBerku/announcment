import { legacy_createStore as createStor, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./storeComponents/reducers";

const store = createStor(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
