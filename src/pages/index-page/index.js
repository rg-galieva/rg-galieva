import React, {Component} from 'react'
import {findDOMNode, render} from 'react-dom';
import {FormattedMessage} from 'react-intl';
import s from './_styles.pcss'

const waves = require('../../assets/svg/waves.svg');
const bg = require('./svg/bg.svg');
const main_img = require('./img/index_bg.png');

class MainPage extends Component {
    componentDidMount() {
        const photo = <img src={main_img} alt="" width="50%" className={s.photo}/>

        setTimeout(() => {
                findDOMNode(this.refs.bg_svg).className += " is_act";
                render(photo, document.getElementById('index_photo'))
            }, 350
        )
    }

    render() {
        return (
            <div className={s.page}>
                <div id="index_photo"></div>

                <h1 className={s.title}><FormattedMessage id="index.title"/></h1>

                <div dangerouslySetInnerHTML={{__html: bg}} className={s.bg} ref="bg_svg"></div>
            </div>
        )
    }
}

export default MainPage