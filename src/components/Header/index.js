import React, {Component} from 'react';
import './style.scss';

class Header extends Component {
    render() {
        return (
            <div className="c-header">
                <div className="c-header__wrap-title">
                    <h2 className="c-header__wrap-title-name">demo app</h2>
                </div>
            </div>
        );
    }
}

export default Header;
