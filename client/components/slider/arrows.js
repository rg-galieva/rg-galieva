import React from 'react'
import {FormattedMessage} from 'react-intl';
import s from './_styles.pcss'
const icons = require('../../assets/svg/icons.svg');

export const NextArrow = (props) => {
    return (
        <div {...props} className="next">
            <div className={s.arrow_right}>
                <svg viewBox="0 0 493.36 219.25">
                    <use xlinkHref={`${icons}#arrow`}/>
                </svg>
            </div>
            <FormattedMessage id="next"/>
        </div>
    )
}

export const PrevArrow = (props) => {
    return (
        <div {...props} className="prev">
            <div className={s.arrow_left}>
                <svg viewBox="0 0 493.36 219.25">
                    <use xlinkHref={`${icons}#arrow`}/>
                </svg>
            </div>
            <FormattedMessage id="prev"/>
        </div>
    )
}