import React, { PropTypes } from 'react'
import {FormattedMessage, injectIntl} from 'react-intl';
import s from './_styles.pcss'
import projectsDB from '../../assets/db/projects.json'


const Project = (props) => {
    const {id} = props;

    return (
        <div className={s.page}>
            <div className={s.pic_wrap}>
                <div className={s.pic}>
                    <img src={pic} />
                </div>
                <h1><FormattedMessage id={title}/></h1>
            </div>
        </div>
    );
}

Project.PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, // id for react-intl FormattedMessage
    pic: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default injectIntl(Project);