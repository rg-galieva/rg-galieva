import React from 'react'
import {FormattedMessage} from 'react-intl'
import LangLink from '../lang-link'

const LangMenu = (props) => {
    return (
        <nav className={['nav', props.css].join(' ')}>
            <LangLink title={<FormattedMessage id="en"/>} locale="en"/>
            <LangLink title={<FormattedMessage id="ru"/>} locale="ru"/>
        </nav>
    )
}

export default LangMenu;