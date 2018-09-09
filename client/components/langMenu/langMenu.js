import React from 'react';
import { FormattedMessage } from 'react-intl';
import LangLink from 'client/components/langLink/langLink';

const LangMenu = ({ css }) => (
  <nav className={`nav ${css}`}>
    <LangLink title={<FormattedMessage id="en" />} locale="en" />
    <LangLink title={<FormattedMessage id="ru" />} locale="ru" />
  </nav>
);

export default LangMenu;
