import { CreateProjectState } from "./CreateProjectState";
import { InboxState } from "./InboxState";


export default interface GlobalState {
    inbox: InboxState;
    createProject: CreateProjectState;
}