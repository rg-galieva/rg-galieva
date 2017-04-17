import React from 'react'
import {NextArrow, PrevArrow} from './arrows'
import s from './_styles.pcss'
require('../../assets/styles/slick/slick.gcss');

const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    // fade: true,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: true,
    customPaging: (i) => <div className={s.pager}/>,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
}

export default settings