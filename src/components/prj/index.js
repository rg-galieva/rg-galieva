import React, {PropTypes, Component} from 'react'
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux'
import history from '../../history'
import {getProjectById} from '../../actions/projects'
import config from '../slider/config_alt'
import ImageListSlider from '../image-list-slider'
import {Image} from 'cloudinary-react';
import {CLOUD_PATH} from '../../constants'
import s from './_styles.pcss'

const icons = require('../../assets/svg/icons.svg');


class Project extends Component {
    getImage = (src) => {
        return require("../../assets/img/projects/" + src);
    };

    getBgImg = (src) => {
        return {backgroundImage: 'url(' + this.getImage(src) + ')'}
    };

    render() {
        const {title, about_prj, prj_link, year, pic_full, slider_desktop, slider_mobile} = this.props.active_project;

        return (
            <div className={s.page} >
                <div className={s.head} style={this.getBgImg(pic_full)}>
                    <div className={s.back_btn} onClick={history.goBack}>
                        <svg viewBox="0 0 60 60">
                            <use xlinkHref={`${icons}#close`}/>
                        </svg>
                    </div>

                    <h1><FormattedMessage id={title}/></h1>
                </div>

                <div className={s.cont}>
                    <div className="row">
                        <div className="col_8">
                            <div className={s.about}>
                                <p><FormattedMessage id={about_prj}/></p>
                            </div>

                            <ul>
                                <li><FormattedMessage id="mail_1"/></li>
                                <li><FormattedMessage id="mail_2"/></li>
                                <li><FormattedMessage id="mail_3"/></li>
                                <li><FormattedMessage id="mail_4"/></li>
                                <li><FormattedMessage id="mail_5"/></li>
                                <li><FormattedMessage id="mail_6"/></li>
                            </ul>
                        </div>
                        <div className="col_4">
                            <h5><FormattedMessage id="frontend_developer"/></h5>
                            <p className="is-emph">{year} <FormattedMessage id="moscow"/></p>
                            <a href={prj_link} target="_blank">{prj_link}</a>
                        </div>
                    </div>
                </div>

                <h2><FormattedMessage id="desktop"/></h2>
                <div className={s.screens}>
                    <ImageListSlider images={slider_desktop} config={config}/>
                </div>

                <h2><FormattedMessage id="mobile"/></h2>
                <div className={s.screens}>
                    <ImageListSlider images={slider_desktop} config={config}/>
                </div>
            </div>
        )
    }
}

Project.PropTypes = {
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
};

export default connect(null, mapDispatchToProps)(Project)