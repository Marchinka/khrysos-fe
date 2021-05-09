import React, { useRef } from "react";
import { Provider } from "react-redux";
import { Redirect, Route, Router, Link } from "react-router-dom"
import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import CreateProject from "./containers/CreateProject";
import Inbox from "./containers/Inbox";
import RootReducer from "./reducers/RootReducer";
import { CREATE_PROJECT_ROUTE, INBOX_ROUTE } from "./routing/Routes";
import AppHistory from "./utils/AppHistory";
import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils/Theme';
import ConfirmationDialog, { ConfirmationOptions } from "./components/utils/ConfirmationDialog";
import MainContext, { IMainContext } from "./contexts/MainContext";
import Feedback from "./components/utils/Feedback";
import MainLoader from "./components/utils/MainLoader";
import { BottomNavigation } from "@material-ui/core";
import AppNavigation from "./components/utils/AppNavigation";
import AppLayout from "./components/utils/AppLayout";

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default () => {
    const confirmationDialog = useRef(null);
    const feedback = useRef(null);
    const mainLoader = useRef(null);

    const mainContextValue : IMainContext = {
        ask: (options: ConfirmationOptions) => {
            confirmationDialog.current.ask(options)
        },
        feedback: {
            success: (message: string) => feedback.current.feedback({ message: message, severity: "success" }),
            error: (message: string) => feedback.current.feedback({ message: message, severity: "error" }),
            warning: (message: string) => feedback.current.feedback({ message: message, severity: "warning" }),
            info: (message: string) => feedback.current.feedback({ message: message, severity: "info" }),
        },
        loader: {
            show: () => mainLoader.current.show(),
            hide: () => mainLoader.current.hide(),
        }
    }
    // confirmationDialog.current.dask({})

    return  <MainContext.Provider value={mainContextValue}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Router history={AppHistory()}>
                            <AppLayout title="Criso" >
                                <div>
                                    <Link to={INBOX_ROUTE}>Inbox</Link> |
                                    <Link to={CREATE_PROJECT_ROUTE}>Create</Link> 
                                </div>
                                <div className="app-body">
                                    <Route exact path={INBOX_ROUTE} component={Inbox} />
                                    <Route exact path={CREATE_PROJECT_ROUTE} component={CreateProject} />
                                </div>
                            </AppLayout>
                            <ConfirmationDialog ref={confirmationDialog} />
                            <Feedback ref={feedback} />
                            <MainLoader ref={mainLoader}/>
                        </Router>
                    </ThemeProvider>
                </Provider>
            </MainContext.Provider>
};