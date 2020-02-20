import React, {Component} from 'react';
import items from '../../data'
import './style.scss'
import {NavLink, withRouter} from "react-router-dom";

class LeftNavigation extends Component {

    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'c-left-navigation__menu-item--active' : '';
    };

    render() {
        return (
            <div className="c-left-navigation">
                <ul className="c-left-navigation__menu">
                    <div className="c-left-navigation__logo">Items</div>
                    {items.resources.map(item => (
                        <li
                            className={`c-left-navigation__menu-item ${this.getNavLinkClass(`/items/${item.id}`)}`}
                            key={item.id}
                        >
                            <NavLink
                                activeClassName="c-left-navigation__nav-link--active"
                                className="c-left-navigation__nav-link"
                                to={`/items/${item.id}`}
                            >
                                    <span className="c-left-navigation__name-element">{item.name}
                                        <span className="c-left-navigation__isActive">
                                            <img
                                                className="c-left-navigation__isActive-true"
                                                src={'/svg/active.svg'} alt="active"/>
                                        </span>
                                        <span className="c-left-navigation__arrow">
                                            <img
                                                className="c-left-navigation__isActive-true"
                                                src={'/svg/arrow-right.svg'} alt="arrow-right"/>
                                        </span>
                                    </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default withRouter(LeftNavigation);
