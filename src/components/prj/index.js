import React, { PropTypes } from 'react'
import {FormattedMessage, injectIntl} from 'react-intl';
import {connect} from 'react-redux'
import {getProjectById} from '../../actions/projects'
import {Image} from 'cloudinary-react';
import {CLOUD_PATH} from '../../constants'
import s from './_styles.pcss'

const Project = (props) => {
    const {title, pic, prj_link, year, pic_full, pic_mobile} = props.active_project;

    return (
        <div className={s.page}>
            <div className={s.pic_wrap}>
                <div className={s.pic}>
                    <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${pic}`}/>
                </div>
                <h1><FormattedMessage id={title}/></h1>
            </div>
        </div>
    );
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

export default injectIntl(connect(null, mapDispatchToProps)(Project));