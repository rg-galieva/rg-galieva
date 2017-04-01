import React, {Component} from 'react'
import {TweenLite, TweenMax, TimelineLite} from 'gsap'
import {Link} from 'react-router-dom'
import {Image} from 'cloudinary-react';
import {intlShape, FormattedMessage, injectIntl} from 'react-intl';

import {CLOUD_PATH} from '../../constants'
import s from './_styles.pcss'

const numb_0 = require('../../assets/svg/numbers/0.svg');
const numb_1 = require('../../assets/svg/numbers/1.svg');

const propTypes = {
    intl: intlShape.isRequired,
};

class MainPage extends Component {
    componentDidMount() {
        // let tl = new TimelineLite();
        //
        // const r = findDOMNode(this.refs.r),
        //     e = findDOMNode(this.refs.e),
        //     a = findDOMNode(this.refs.a),
        //     c = findDOMNode(this.refs.c),
        //     t = findDOMNode(this.refs.t),
        //     i = findDOMNode(this.refs.i),
        //     v = findDOMNode(this.refs.v),
        //     e_2 = findDOMNode(this.refs.e_2);
        //
        // const testAr = [r, e, a, c, t, i, v, e_2];
        //
        // testAr.map((el) => (tl.set(el, {
        //         css: {
        //             strokeDashoffset: el.getTotalLength(), strokeDasharray: el.getTotalLength()
        //         }
        //     }))
        // );
    }

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

MainPage.propTypes = propTypes;

export default injectIntl(MainPage);