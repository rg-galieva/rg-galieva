import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import switchLang from 'client/actions/switch-lang';

const LangLink = ({
  title, locale, lang, handleClick,
}) => {
  const isAct = (locale === lang);

  const activeClass = (isAct) ? 'isAct' : '';

  return (
    <a
      onClick={() => handleClick(locale, isAct)}
      className={activeClass}
      role="link"
      tabIndex={0}
    >
      {title}
    </a>
  );
};

const mapStateToProps = state => ({
  lang: state.switchLang.lang,
});

const mapDispatchToProps = dispatch => ({
  handleClick: (lang, isAct) => {
    if (isAct) {
      return null;
    }
    return dispatch(switchLang(lang));
  },
});

LangLink.propTypes = {
  title: PropTypes.shape({}).isRequired,
  locale: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LangLink);
