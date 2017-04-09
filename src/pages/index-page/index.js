import React, {Component} from 'react'
import {findDOMNode} from 'react-dom';
import {Image} from 'cloudinary-react';
import {FormattedMessage} from 'react-intl';

import {CLOUD_PATH} from '../../constants'
import s from './_styles.pcss'

const waves = require('../../assets/svg/waves.svg');
const bg = require('./svg/bg.svg');
const main_img = require('./img/index_bg.png');

class MainPage extends Component {
    componentDidMount() {
        setTimeout(() => {
                findDOMNode(this.refs.bg_svg).className += " is_act";
            }, 350
        )
    }

    render() {
        return (
            <div className={s.page}>
                <div className={s.photo} style={{backgroundImage: main_img}}>
                    {/*<Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/index_bg`}/>*/}
                </div>

                <div className={s.photo_wrap}>

                    <h1><FormattedMessage id="index.title"/></h1>
                </div>

                <div dangerouslySetInnerHTML={{__html: bg}} className={s.bg} ref="bg_svg"></div>
            </div>
        )
    }
}

export default MainPage