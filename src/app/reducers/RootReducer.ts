import { combineReducers } from "redux";
import { InboxActionTypes, STORE_PROJECT_LIST_ACTION } from "../actions/InboxActions";
import GlobalState from "../models/GlobalState";
import CreateProjectReducer from "./CreateProjectReducer";
import InboxReducer from "./InboxReducer";

// THIS MUST MATCH THE NAME INSIDE APP STATE 
export default combineReducers({
    inbox: InboxReducer,
    createProject: CreateProjectReducer
});