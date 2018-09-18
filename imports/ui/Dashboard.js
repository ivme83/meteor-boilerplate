import React            from 'react';
import { Meteor }       from 'meteor/meteor';

import browserHistory   from '../utils/History';

import PrivateHeader    from './PrivateHeader';

export default class Dashboard extends React.Component {

    componentWillMount() {
        if (!Meteor.userId()) {
            browserHistory.replace('/');
        }
    }

    render() {
        return (
            <div>
                <PrivateHeader title="Dashboard" />
                <div className="page-content">
                    Welcome to your dashboard!
                </div>
            </div>
        );
    }
}