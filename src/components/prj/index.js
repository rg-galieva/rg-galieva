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

const close_svg = require('../../assets/svg/close.svg');


class Project extends Component {
    // componentWillMount() {
    //     document.getElementById('body').style.backgroundColor = this.props.active_project.bg_color;
    // }
    //
    // componentWillUnmount() {
    //     document.getElementById('body').style.backgroundColor = "";
    // }

    getImage = (src) => {
        return require("../../assets/img/projects/" + src);
    };

    getBgImg = (src) => {
        return {backgroundImage: 'url(' + this.getImage(src) + ')'}
    };

    render() {
        const {title, about_prj, pic, prj_link, year, pic_full, slider_desktop, slider_mobile} = this.props.active_project;

        return (
            <div className={s.page} >
                <div className={s.head} style={this.getBgImg(pic_full)}>
                    <div dangerouslySetInnerHTML={{__html: close_svg}} className={s.back_btn} onClick={history.goBack}></div>

                    <h1><FormattedMessage id={title}/></h1>
                </div>

                <div className={s.cont}>
                    <p><FormattedMessage id={about_prj}/></p>
                    <br />
                    <h5><FormattedMessage id="frontend_developer"/></h5>

                    <p className="is-emph">[2013 - 2016] <FormattedMessage id="moscow"/></p>
                    <ul>
                        <li><FormattedMessage id="mail_1"/></li>
                        <li><FormattedMessage id="mail_2"/></li>
                        <li><FormattedMessage id="mail_3"/></li>
                        <li><FormattedMessage id="mail_4"/></li>
                        <li><FormattedMessage id="mail_5"/></li>
                        <li><FormattedMessage id="mail_6"/></li>
                    </ul>
                </div>

                <div className={s.screens}>
                        <ImageListSlider images={slider_desktop} config={config}/>
                    <p>Description</p>
                </div>
            </div>
        )
    }
}

Project.PropTypes = {
    title: PropTypes.string.isRequired, // id for react-intl FormattedMessage
    pic: PropTypes.string.isRequired,
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