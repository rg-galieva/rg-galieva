import React, {PropTypes} from 'react'
import {switchLang} from '../../actions/switch-lang'
import {SWITCH_LANG} from '../../constants'

const LangLink = (props) => {
    let {title, locale} = props;

    const handleClick = (ev) => {
        if (ev) ev.preventDefault();

    }

    return (
        <a onClick={handleClick} title={title}>{title}</a>
    )
};

LangLink.PropTypes = {
    title: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired
}

export default LangLink;