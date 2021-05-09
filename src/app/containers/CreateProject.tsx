import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import CreateProjectActions from "../actions/CreateProjectActions";
import { ProjectDetail } from "../models/CreateProjectState";
import GlobalState from "../models/GlobalState";

export default () => {
    const project = useSelector<GlobalState, ProjectDetail>(state => state.createProject.project);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CreateProjectActions.storeProject({ _id: "2222" }));
    }, [])

    return  <div>
                <h1>Create project</h1>
                {project._id}
            </div>
}