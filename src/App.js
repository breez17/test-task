import React from 'react';
import Layout from "./hoc/Layout";
import {Router} from "react-router-dom";
import history from "./util/history";

class App extends React.Component {


    render() {
        return (
            <Router history={history}>
                <Layout/>
            </Router>
        );
    }
}

export default App;
