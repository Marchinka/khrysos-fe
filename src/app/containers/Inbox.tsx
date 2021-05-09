import React, { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import InboxActions from "../actions/InboxActions";
import GlobalState from "../models/GlobalState"
import { InboxProject, InboxState } from "../models/InboxState";
import Button from '@material-ui/core/Button';
import MainContext from "../contexts/MainContext";

export default () => {
    const projects = useSelector<GlobalState, InboxProject[]>(state => state.inbox.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(InboxActions.storeProjects([
            { _id: "2" },
            { _id: "22" },
            { _id: "2222" },
        ]))
    }, []);

    const mainContext = useContext(MainContext);

    const ask = () => {
        mainContext.ask({
           title: "Are you sure?",
           text: "Are you really sure?!?!",
           yes: "Yes",
           no: "No",
           yesCallback: () => alert("YES")
        });
    }

    const feedback = () => {
        mainContext.feedback.warning("YEAH!");
    };

    
    const loader = () => {
        mainContext.loader.show()
    };

    return  <div>
                <h1>Inbox</h1>
                <img src="/images/hello-world.png"/>
                <Button variant="contained" color="primary" onClick={ask}>
                    Confirmation
                </Button>
                <Button variant="contained" color="primary" onClick={feedback}>
                    Feedback
                </Button>
                <Button variant="contained" color="primary" onClick={loader}>
                    Loader
                </Button>
                {projects.map(project => <div key={project._id}>{project._id}</div>)}
            </div>
}