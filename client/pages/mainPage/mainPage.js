import React, { Component } from 'react';
import { render } from 'react-dom';
import { FormattedMessage } from 'react-intl';
import { Image } from 'cloudinary-react';
import { CLOUD_PATH } from 'client/constants';
import s from './mainPage.scss';

import bg from './svg/bg.svg';

class MainPage extends Component {
  componentDidMount() {
    const photo = <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/index_bg`} className={s.photo} alt="background" />;

    setTimeout(() => {
      document.getElementById('bg_svg').className += ' is_act';
      render(photo, document.getElementById('index_photo'));
    }, 350);
  }

  render() {
    return (
      <div className={s.page}>
        <div id="index_photo" />

        <h1 className={s.title}><FormattedMessage id="index.title" /></h1>

        <div className={s.bg} id="bg_svg">
          <svg viewBox="0 0 23.05 24.74">
            <use xlinkHref={`${bg}#index_bg_1`} className={s.bg_svg_1} />
            <use xlinkHref={`${bg}#index_bg_2`} className={s.bg_svg_2} />
          </svg>
        </div>
      </div>
    );
  }
}

export default MainPage;
