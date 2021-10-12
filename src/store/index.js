import CardReducer from "./Reducer/Reducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
const RootReducer = combineReducers({ cardReducer: CardReducer });
const Store = createStore(
  RootReducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
);
export default Store;
