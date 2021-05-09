import { InboxActionTypes, STORE_PROJECT_LIST_ACTION } from "../actions/InboxActions";
import GlobalState from "../models/GlobalState";
import { InboxState } from "../models/InboxState";

export default (state: InboxState = { projects: [] }, action: InboxActionTypes) : InboxState => {
    switch(action.type) {
        case STORE_PROJECT_LIST_ACTION:
            return {...state, projects: action.payload}
    }
    return state;
};