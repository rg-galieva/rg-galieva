import React from 'react';
import { FormattedMessage } from 'react-intl';
import icons from 'client/assets/svg/icons.svg';
import s from './slider.scss';


export const NextArrow = props => (
  <div {...props} className="next">
    <div className={s.arrow_right}>
      <svg viewBox="0 0 493.36 219.25">
        <use xlinkHref={`${icons}#arrow`} />
      </svg>
    </div>
    <FormattedMessage id="next" />
  </div>
);

export const PrevArrow = props => (
  <div {...props} className="prev">
    <div className={s.arrow_left}>
      <svg viewBox="0 0 493.36 219.25">
        <use xlinkHref={`${icons}#arrow`} />
      </svg>
    </div>
    <FormattedMessage id="prev" />
  </div>
);
