import { CreateProjectActionTypes, STORE_PROJECT_ACTION } from "../actions/CreateProjectActions";
import { CreateProjectState } from "../models/CreateProjectState";

export default (state: CreateProjectState = { project: { _id: "-1"} }, action: CreateProjectActionTypes) : CreateProjectState => {
    switch (action.type) {
        case STORE_PROJECT_ACTION: {
            return { ...state, project: action.payload }
        }
    }
    return state;
};