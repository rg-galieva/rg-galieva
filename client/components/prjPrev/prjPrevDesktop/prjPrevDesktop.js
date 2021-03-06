import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Image } from 'cloudinary-react';
import { CLOUD_PATH } from 'client/constants';
import numbs from 'client/assets/svg/numbers.svg';
import s from './prjPrevDesktop.scss';


const ProjectPrevDesktop = (props) => {
  const {
    id, title, pic, url,
  } = props;

  return (
    <div className={s.page}>
      <div className={s.pic_wrap}>
        <div className={s.pic}>
          <Link to={`/project/${url}`}>
            <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${pic}`} />
          </Link>
        </div>
        <h1><Link to={`/project/${url}`}><FormattedMessage id={title} /></Link></h1>
      </div>

      <div className={s.slider}>
        <div className={s.slider_numb}>
          <svg viewBox="0 0 64.24 163.45">
            <use xlinkHref={`${numbs}#_0`} />
          </svg>
          <svg viewBox="0 0 132.55 172.84">
            <use xlinkHref={`${numbs}#_${id}`} />
          </svg>
        </div>
      </div>
    </div>
  );
};


ProjectPrevDesktop.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired, // id for react-intl FormattedMessage
  pic: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectPrevDesktop;
