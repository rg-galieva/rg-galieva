import React from 'react'
import {FormattedMessage} from 'react-intl';
import s from './_styles.pcss'
require('../../assets/styles/slick/slick.gcss');

const arrow_right = require('../../assets/svg/arrow.svg');

const NextArrow = (props) => {
    return (
        <div {...props} className={s.next}>
            <div dangerouslySetInnerHTML={{__html: arrow_right}} className={s.arrow_right}></div>
            <FormattedMessage id="next"/>
        </div>
    )
}

const PrevArrow = (props) => {
    return (
        <div {...props} className={s.prev}>
            <div dangerouslySetInnerHTML={{__html: arrow_right}} className={s.arrow_left}></div>
            <FormattedMessage id="prev"/>
        </div>
    )
}

const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    fade: true,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: false,
    customPaging: (i) => <div className={s.pager}/>,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
}

export default settings