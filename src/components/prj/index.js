import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getProjectById} from '../../actions/projects'
import configDesktop from '../slider/config_alt'
import configMobile from '../slider/config_mobile'
import ImageListSlider from '../image-list-slider'
import {Image} from 'cloudinary-react';
import {CLOUD_PATH} from '../../constants'
import s from './_styles.pcss'

const icons = require('../../assets/svg/icons.svg');


class Project extends Component {
    getImage = src => require("../../assets/img/projects/" + src);

    getBgImg = src => ({backgroundImage: 'url(' + this.getImage(src) + ')'});

    config = this.props.isMobile ? configMobile : configDesktop;

    sliderDesktop = img_list => {
        if (img_list.length > 1) {
            return (
              <div>
                  <h2><FormattedMessage id="desktop"/></h2>
                  <div className={s.screens}>
                      <ImageListSlider images={img_list} config={this.config}/>
                  </div>
              </div>
            )
        } else if (img_list.length === 1) {
            return (
              <div>
                  <h2><FormattedMessage id="desktop"/></h2>
                  <div className={s.screens}>
                      <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${img_list[0]}`}/>
                  </div>
              </div>
            )
        }
    }

    sliderMobile = img_list => {
        if (img_list.length > 1) {
            return (
              <div>
                  <h2><FormattedMessage id="mobile"/></h2>
                  <div className={s.screens_mobile}>
                      <ImageListSlider images={img_list} config={this.config}/>
                  </div>
              </div>
            )
        } else if (img_list.length === 1) {
            return (
              <div>
                  <h2><FormattedMessage id="mobile"/></h2>
                  <div className={s.screens_mobile}>
                      <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${img_list[0]}`}/>
                  </div>
              </div>
            )
        }
    }


    render() {
        const {active_project} = this.props;

        const {
            id,
            title,
            about_prj,
            role = "frontend_developer",
            prj_link,
            year,
            pic_full,
            place,
            stack,
            description,
            slider_desktop,
            slider_mobile,
        } = active_project;

        const descr_html = description.map(d => <li key={d}><FormattedMessage id={d}/></li>)

        return (
          <div className={s.page}>
              <div className={s.head} style={this.getBgImg(pic_full)}>
                  <Link className={s.back_btn} to={`/projects/${id}`}>
                      <svg viewBox="0 0 60 60">
                          <use xlinkHref={`${icons}#close`}/>
                      </svg>
                  </Link>

                  <h1><FormattedMessage id={title}/></h1>
              </div>

              <div className={s.cont}>
                  <div className="row">
                      <div className="col_8">
                          <div className={s.about}>
                              <p><FormattedMessage id={about_prj}/></p><br/>
                              <p className="is-emph"><FormattedMessage id="techstack_2"/>: {stack}
                              </p>
                          </div>

                          <ul>
                              {descr_html}
                          </ul>
                      </div>
                      <div className="col_4">
                          <h5><FormattedMessage id={role}/></h5>
                          <p className="is-emph">{year} <FormattedMessage id={place}/></p>
                          <a href={prj_link} target="_blank">{prj_link}</a>
                      </div>
                  </div>
              </div>

              {this.sliderDesktop(slider_desktop)}
              {this.sliderMobile(slider_mobile)}
          </div>
        )
    }
}

Project.propTypes = {
    title: PropTypes.string.isRequired, // id for react-intl FormattedMessage
    prj_link: PropTypes.string,
    year: PropTypes.string,
    pic_full: PropTypes.string,
    slider_desktop: PropTypes.array,
    slider_mobile: PropTypes.array
}

const mapDispatchToProps = (dispatch, props) => {
    const id = props.match.params.id;
    return dispatch(getProjectById(id))
}

const mapStateToProps = (state) => {
    return {
        isMobile: state.switchVersion.isMobile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)