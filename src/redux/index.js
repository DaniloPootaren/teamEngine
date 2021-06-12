import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import employees from "./employees";
import global from "./global";

const reducer = combineReducers({
  global,
  employees,
});
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    thunk: thunk,
  }),
});
export default store;
