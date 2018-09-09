import React from 'react';
import 'client/assets/styles/slick/slick.scss';

import { NextArrow, PrevArrow } from './arrows';

const settings = {
  dots: false,
  infinite: true,
  speed: 1200,
  slidesToShow: 1,
  autoplay: true,
  pauseOnHover: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default settings;
