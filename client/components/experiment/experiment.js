import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Image } from 'cloudinary-react';

import { CLOUD_PATH } from 'client/constants';
import s from './experiment.scss';


const Experiment = ({ experiment }) => {
  if (!experiment && !experiment.isVisible) return null;

  const {
    title, aboutPrj, date, imgPrev, link, github, techStack,
  } = experiment;


  return (
    <section className={s.experiment}>
      <div className={s.experiment_info}>
        <h2>
          <FormattedMessage id={title} />
        </h2>

        <p className="is-emph">{date}</p>

        <div className={s.desc}>
          <p>
            <FormattedMessage id="techstack" />
                      :
            {' '}
            {techStack}
          </p>
          <p><FormattedMessage id={aboutPrj} /></p>
        </div>

        <p>
          <b>
            <FormattedMessage id="live_preview" />
                      :
          </b>
          {' '}
          <a
            href={link}
            className={s.link_full_experiment}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </a>
        </p>
        <p>
          <b>GitHub:</b>
          {' '}
          <a
            href={github}
            className={s.link_full_experiment}
            target="_blank"
            rel="noopener noreferrer"
          >
            {github}
          </a>
        </p>
      </div>

      <div className={s.experiment_image}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className={s.experiment_image_bg}>
            <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${imgPrev}`} />
          </div>
        </a>
      </div>
    </section>
  );
};

Experiment.propTypes = {
  experiment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string,
    isVisible: PropTypes.bool.isRequired,
  }),
};

export default Experiment;
