import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import messagesReducer from "./messages/messagesSlicer";

// Redux store
const store = configureStore(
  {
    reducer: messagesReducer,
  },
  applyMiddleware(thunk)
);

export default store;
