import React from 'react'
import {NextArrow, PrevArrow} from './arrows'
require('../../assets/styles/slick/slick.gcss');

const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
}

export default settings