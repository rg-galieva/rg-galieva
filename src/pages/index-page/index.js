import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Image} from 'cloudinary-react';
import {FormattedMessage} from 'react-intl';

import {CLOUD_PATH} from '../../constants'
import s from './_styles.pcss'

const waves = require('../../assets/svg/waves.svg');

class MainPage extends Component {
    render() {
        return (
            <div className={s.page}>

                <div className={s.photo_wrap}>
                    {/*<div className={s.photo}>*/}
                        {/*<Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/main`}/>*/}
                    {/*</div>*/}
                    <h1><FormattedMessage id="index.title"/></h1>
                </div>

                <div dangerouslySetInnerHTML={{__html: waves}} className={s.bg}></div>
            </div>
        )
    }
}

export default MainPage