import { InboxProject } from "../models/InboxState";

export const STORE_PROJECT_ACTION = 'STORE_PROJECT_ACTION';

export interface StoreProjectAction {
  type: typeof STORE_PROJECT_ACTION;
  payload: InboxProject;
};

export type CreateProjectActionTypes = StoreProjectAction;

export default {
    storeProject: (project: InboxProject) : StoreProjectAction => {
        return { type: STORE_PROJECT_ACTION, payload: project };
    }
}