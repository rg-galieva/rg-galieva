import React from 'react';
import { FormattedMessage } from 'react-intl';


const NoMatch = ({ history }) => (
  <div>
    <h3>
      <FormattedMessage id="nomatch.head" />
      <code>{history.location.pathname}</code>
    </h3>

    <button
      className="is-emph"
      type="button"
      tabIndex={0}
      onClick={history.goBack}
      onKeyPress={history.goBack}
    >
      <FormattedMessage id="nomatch.link_back" />
    </button>
  </div>
);

export default NoMatch;
