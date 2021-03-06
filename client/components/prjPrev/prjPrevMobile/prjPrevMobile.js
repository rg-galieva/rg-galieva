import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Image, Transformation } from 'cloudinary-react';
import { CLOUD_PATH } from 'client/constants';

import s from './prjPrevMobile.scss';

const ProjectPrevMobile = ({ title, pic, url }) => (
  <div className={s.page}>
    <div className={s.pic_wrap}>
      <div className={s.pic}>
        <Link to={`/project/${url}`}>
          <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${pic}`}>
            <Transformation width="600" crop="scale" />
          </Image>
        </Link>
      </div>

      <h1><Link to={`/project/${url}`}><FormattedMessage id={title} /></Link></h1>
    </div>
  </div>
);

ProjectPrevMobile.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired, // id for react-intl FormattedMessage
  pic: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectPrevMobile;
