import React, {Component} from 'react';
import LeftNavigation from "../LeftNavigation";
import {withRouter} from "react-router-dom";
import items from '../../data'
import history from "../../util/history";
import './style.scss'

class ViewItem extends Component {

    state = {
        item: null,
        action: null
    };

    componentDidMount() {
        const {id} = this.props.match.params;

        this.loadItem(id);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {id} = this.props.match.params;

        if (this.state.item?.id !== id) {
            this.loadItem(id);
        }
    }

    loadItem = id => {
        const item = items.resources.find(item => item.id === id);

        if (!item) {
            history.push('/404');
            return;
        }

        const actions = items.actions.filter(action => item.actionIds.includes(action.id));

        this.setState({
            item,
            actions
        });
    };

    render() {

        if (!this.state.item) {
            return '';
        }

        const {item, actions} = this.state;

        return (
            <div className="c-items">
                <LeftNavigation/>
                <div className="c-items-content">
                    <div className="c-items-content__header">
                        <h2 className="c-items-content__header-item">{item.name}</h2>
                    </div>
                    <div className="c-items-content__wrapper">
                        <div className="c-items-content__general">
                            <h2 className="c-items-content__general-details">
                                general details
                                <img title="Some help"
                                     src={"/svg/help-12.svg"}
                                     alt="help"/>
                            </h2>
                            <ul>
                                <li className="c-items-content__general-name">
                                    <span className="c-items-content__general-name-tag">Name</span>
                                    <p className="c-items-content__general-name-item">{item.name}</p>
                                </li>
                                <li className="c-items-content__general-name">
                                    <span className="c-items-content__general-name-tag">Description</span>
                                    <p className="c-items-content__general-name-item">{item.description}</p>
                                </li>
                                <li className="c-items-content__general-name">
                                    <span className="c-items-content__general-name-tag">resource type</span>
                                    <p className="c-items-content__general-name-item">{item.resourceType}</p>
                                </li>
                                <li className="c-items-content__general-name">
                                    <span className="c-items-content__general-name-tag">path</span>
                                    <p className="c-items-content__general-name-item">{item.path}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="c-items-content__actions">
                            <h2 className="c-items-content__general-details">
                                permitted actions
                                <img title="Some help"
                                     src={"/svg/help-12.svg"}
                                     alt="help"/>
                            </h2>
                            <ul className="c-items-content__actions-permitted">
                                {actions.map(action => (
                                    <li className="c-items-content__actions-permitted-name" key={action.id}>
                                        {action.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (withRouter(ViewItem));
