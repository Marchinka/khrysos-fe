import { InboxProject } from "../models/InboxState";

export const STORE_PROJECT_LIST_ACTION = 'STORE_PROJECT_LIST_ACTION';

export interface StoreProjectListAction {
  type: typeof STORE_PROJECT_LIST_ACTION;
  payload: InboxProject[];
};

export type InboxActionTypes = StoreProjectListAction;

export default {
    storeProjects: (projects: InboxProject[]) : StoreProjectListAction => {
        return { type: STORE_PROJECT_LIST_ACTION, payload: projects };
    }
}