import React from 'react'
import {FormattedMessage} from 'react-intl';
import s from './_styles.pcss'
const arrow_right = require('../../assets/svg/arrow.svg');

export const NextArrow = (props) => {
    return (
        <div {...props} className="next">
            <div dangerouslySetInnerHTML={{__html: arrow_right}} className={s.arrow_right}></div>
            <FormattedMessage id="next"/>
        </div>
    )
}

export const PrevArrow = (props) => {
    return (
        <div {...props} className="prev">
            <div dangerouslySetInnerHTML={{__html: arrow_right}} className={s.arrow_left}></div>
            <FormattedMessage id="prev"/>
        </div>
    )
}