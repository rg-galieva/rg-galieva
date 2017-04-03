import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Image} from 'cloudinary-react';
import {FormattedMessage, injectIntl} from 'react-intl';

import {CLOUD_PATH} from '../../constants'
import s from './_styles.pcss'

const numb_0 = require('../../assets/svg/numbers/0.svg');
const numb_1 = require('../../assets/svg/numbers/1.svg');

class MainPage extends Component {
    render() {
        return (
            <div className={s.page}>

                <div className={s.photo_wrap}>
                    <div className={s.photo}>
                        <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/main`}/>
                    </div>
                    <h1><FormattedMessage id="index.title"/></h1>
                </div>

                <div className={s.slider}>

                    <div dangerouslySetInnerHTML={{__html: `${numb_0} ${numb_1}`}} className={s.slider_numb}></div>

                    <Link to="/projects"/>
                </div>
            </div>
        )
    }
}

export default injectIntl(MainPage);