import React from 'react'
import history from '../../history'
import {FormattedMessage} from 'react-intl';

const NoMatch = ({ location }) => (
    <div>
        <h3><FormattedMessage id="nomatch.head"/><code>{location.pathname}</code></h3>
        <a className="is-emph" onClick={history.goBack}><FormattedMessage id="nomatch.link_back"/></a>
    </div>
);

export default NoMatch