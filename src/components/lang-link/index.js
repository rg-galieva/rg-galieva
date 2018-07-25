import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import switchLang from '../../actions/switch-lang'

const LangLink = (props) => {
    let {title, locale, lang, handleClick} = props;
    let is_act = (locale === lang);

    let activeClass = (is_act) ? "is_act" : "";

    return (
        <a onClick={() => handleClick(locale, is_act)} className={activeClass}>{title}</a>
    )
};

const mapStateToProps = (state) => {
    return {
        lang: state.switchLang.lang
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (lang, is_act) => {
            if (is_act) {
                return null
            } else {
                dispatch(switchLang(lang))
            }
        }
    }
};

LangLink.propTypes = {
    title: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LangLink);