import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import {FormattedMessage, injectIntl} from 'react-intl';
import {Image} from 'cloudinary-react';
import {CLOUD_PATH} from '../../constants'
import s from './_styles.pcss'

const numb_0 = require('../../assets/svg/numbers/0.svg');

const ProjectPrev = (props) => {
    const {id, title, pic, url} = props;
    const numb = require(`../../assets/svg/numbers/${id}.svg`);

    return (
        <div className={s.page}>
            <div className={s.pic_wrap}>
                <div className={s.pic}>
                    <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${pic}`}/>
                </div>
                <h1><Link to={`/projects/${url}`}><FormattedMessage id={title}/></Link></h1>
            </div>

            <div className={s.slider}>
                <div dangerouslySetInnerHTML={{__html: `${numb_0} ${numb}`}} className={s.slider_numb}></div>
            </div>
        </div>
    )
}

ProjectPrev.PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, // id for react-intl FormattedMessage
    pic: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default injectIntl(ProjectPrev);