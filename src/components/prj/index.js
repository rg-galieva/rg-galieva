import React, {PropTypes, Component} from 'react'
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux'
import {getProjectById} from '../../actions/projects'
import {Image} from 'cloudinary-react';
import {CLOUD_PATH} from '../../constants'
import Slider from 'react-slick'
import config from '../slider/config_alt'
import s from './_styles.pcss'

class Project extends Component {
    // componentWillMount() {
    //     document.getElementById('body').className += 'is_alt';
    // }
    //
    // componentWillUnmount() {
    //     document.getElementById('body').className = '';
    // }


    // componentWillMount() {
    //     console.log("---this.props", this.props.active_project);
    //     document.getElementById('body').style.backgroundImage = this.getBg(this.props.active_project.bg);
    // }
    //
    // componentWillUnmount() {
    //     document.getElementById('body').style.backgroundImage = '';
    // }

    getImage = (src) => {
        return require("../../assets/img/projects/" + src);
    };

    getBgImg = (src) => {
        return {backgroundImage: 'url(' + this.getImage(src) + ')'}
    };

    getBg = (src) => {
        return 'url(' + this.getImage(src) + ')'
    };

    render() {
        const {title, pic, bg, prj_link, year, pic_full, pic_mobile} = this.props.active_project;

        return (
            <div className={s.page} >

                {/*<div className={s.bg} style={this.getBgImg(bg)}></div>*/}
                <div className={s.head} style={this.getBgImg(pic_full)}>
                    <h1><FormattedMessage id={title}/></h1>
                </div>

                <div className={s.cont}>
                    <p>Skyforge is a free-to-play MMORPG set in a universe where fantasy and Sci-Fi collide. Players start as immortals trying to become mighty gods while protecting their planet, Aelion.</p>
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
                    <Slider {...config}>
                        <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/sf_screen_1`}/>
                        <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/sf_screen_2`}/>
                    </Slider>
                    <p>Description</p>
                </div>
                {/*<div className={s.pic_wrap}>*/}
                    {/*<div className={s.pic}>*/}
                        {/*<Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${pic}`}/>*/}
                    {/*</div>*/}
                    {/**/}
                {/*</div>*/}
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
    pic_mobile: PropTypes.string
}

const mapDispatchToProps = (dispatch, props) => {
    const id = props.match.params.id;
    return dispatch(getProjectById(id))
};

export default connect(null, mapDispatchToProps)(Project)