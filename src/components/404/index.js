import React, {Component} from 'react';
import './style.scss'

class NotFound extends Component {
    render() {
        return (
            <div className="c-not-found">
                <div className="c-not-found__wrap-error">
                    <h2 className="c-not-found__wrap-error-name">404 error</h2>
                    <span className="c-not-found__wrap-error-description">Page not found</span>
                    <a href="/" className="c-not-found__wrap-error-back">to home</a>
                </div>
            </div>
        );
    }
}

export default NotFound;
