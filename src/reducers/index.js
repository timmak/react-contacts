import contacts from "./contacts";
import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

export default combineReducers({
  contacts,
  router: routerReducer
});
