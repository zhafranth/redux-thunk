import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducer/UserReducer";

const reducer = combineReducers({ userReducer });

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
