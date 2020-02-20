import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import NotFound from "../components/404";
import HomePage from "../components/HomePage";
import ViewItem from "../components/ViewItem";
import Header from "../components/Header";

class Layout extends React.Component {
    render() {
        return (
            <div className="page">
                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    <Route path="/items/:id">
                        <Header/>
                        <div className="c-item-page">
                            <ViewItem/>
                        </div>
                    </Route>
                    <Route path="/*">
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Layout;
