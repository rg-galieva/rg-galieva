import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';

import { getProjectById } from 'client/actions/projects';
import configDesktop from 'client/components/slider/configAlt';
import configMobile from 'client/components/slider/configMobile';
import ImageListSlider from 'client/components/imageListSlider/imageListSlider';
import { CLOUD_PATH } from 'client/constants';
import icons from 'client/assets/svg/icons.svg';

import s from './prj.scss';


class Project extends Component {
    getImage = src => require(`client/assets/img/projects/${src}`);

    getBgImg = src => ({ backgroundImage: `url(${this.getImage(src)})` });

    sliderDesktop = (imgList) => {
      const { isMobile } = this.props;

      if (imgList.length > 1) {
        return (
          <div>
            <h2><FormattedMessage id="desktop" /></h2>
            <div className={s.screens}>
              <ImageListSlider
                images={imgList}
                config={isMobile ? configMobile : configDesktop}
              />
            </div>
          </div>
        );
      }
      if (imgList.length === 1) {
        return (
          <div>
            <h2><FormattedMessage id="desktop" /></h2>
            <div className={s.screens}>
              <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${imgList[0]}`} />
            </div>
          </div>
        );
      }

      return null;
    }

    sliderMobile = (imgList) => {
      const { isMobile } = this.props;

      if (imgList.length > 1) {
        return (
          <div>
            <h2><FormattedMessage id="mobile" /></h2>
            <div className={s.screens_mobile}>
              <ImageListSlider images={imgList} config={isMobile ? configMobile : configDesktop} />
            </div>
          </div>
        );
      }
      if (imgList.length === 1) {
        return (
          <div>
            <h2><FormattedMessage id="mobile" /></h2>
            <div className={s.screens_mobile}>
              <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${imgList[0]}`} />
            </div>
          </div>
        );
      }

      return null;
    }


    render() {
      const {
        activeProject: {
          id,
          title,
          aboutPrj,
          prjLink,
          year,
          picFull,
          place,
          stack,
          description,
          sliderDesktop,
          sliderMobile,
        } = {},
      } = this.props;

      const descrHtml = description.map(d => <li key={d}><FormattedMessage id={d} /></li>);

      return (
        <div className={s.page}>
          <div className={s.head} style={this.getBgImg(picFull)}>
            <Link className={s.back_btn} to={`/projects/${id}`}>
              <svg viewBox="0 0 60 60">
                <use xlinkHref={`${icons}#close`} />
              </svg>
            </Link>

            <h1><FormattedMessage id={title} /></h1>
          </div>

          <div className={s.cont}>
            <div className="row">
              <div className="col_8">
                <div className={s.about}>
                  <p><FormattedMessage id={aboutPrj} /></p>
                  <br />
                  <p className="is-emph">
                    <FormattedMessage id="techstack_2" />
                                  :
                    {' '}
                    {stack}
                  </p>
                </div>

                <ul>
                  {descrHtml}
                </ul>
              </div>
              <div className="col_4">
                <p className="is-emph">
                  {year}
                  {' '}
                  <FormattedMessage id={place} />
                </p>
                <a href={prjLink} target="_blank" rel="noopener noreferrer">{prjLink}</a>
              </div>
            </div>
          </div>

          {this.sliderDesktop(sliderDesktop)}
          {this.sliderMobile(sliderMobile)}
        </div>
      );
    }
}

Project.propTypes = {
  activeProject: PropTypes.shape({
    title: PropTypes.string.isRequired, // id for react-intl FormattedMessage
    prjLink: PropTypes.string,
    year: PropTypes.string,
    picFull: PropTypes.string,
    sliderDesktop: PropTypes.arrayOf(PropTypes.string),
    sliderMobile: PropTypes.arrayOf(PropTypes.string),
  }),
};

const mapDispatchToProps = (dispatch, props) => {
  const { match: { params: { id } = {} } = {} } = props || {};
  return dispatch(getProjectById(id));
};

const mapStateToProps = state => ({
  isMobile: state.switchVersion.isMobile,
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
