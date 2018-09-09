import React from 'react';
import 'client/assets/styles/slick/slick.scss';

import { NextArrow, PrevArrow } from './arrows';
import s from './slider.scss';


const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  // fade: true,
  slidesToShow: 1,
  autoplay: true,
  pauseOnHover: true,
  customPaging: i => <div className={s.pager} />,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default settings;
