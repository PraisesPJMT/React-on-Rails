import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import messageReducer, { getMessage } from "./messages/messages";

const reducer = combineReducers({
    messageReducer,
});

// Redux store
const store = configureStore({
    reducer,
    middleware: [thunk],
});

store.dispatch(getMessage());
export default store;
