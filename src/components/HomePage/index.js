import React, {Component} from 'react';
import Header from "../Header";
import LeftNavigation from "../LeftNavigation";

class HomePage extends Component {
    render() {
        return (
            <div className="c-home-page">
                <Header/>
                <div className="c-home-page__content">
                <LeftNavigation/>
                </div>
            </div>
        );
    }
}

export default HomePage;
