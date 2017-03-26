import React, {PropTypes, Component, StyleSheet} from 'react'
import {findDOMNode} from 'react-dom'
import {TweenLite, TweenMax, TimelineLite} from 'gsap'
import {Link} from 'react-router'
import {Image} from 'cloudinary-react';
import {CLOUD_PATH} from '../../constants'
import s from './_styles.css'

const numb_0 = require('../../assets/svg/numbers/0.svg');
const numb_1 = require('../../assets/svg/numbers/1.svg');

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
                <div ref="main_page" id="d3_bg" className={s.d3_bg}></div>

                <div className={s.photo}>
                    <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/main`}/>

                    <h1>reactive<br /> frontend<br /> engineer</h1>
                </div>

                <div className={s.slider}>

                    <div dangerouslySetInnerHTML={{__html: `${numb_0} ${numb_1}`}} className={s.slider_numb}></div>

                    <Link to="/projects"/>
                </div>
            </div>
        )
    }
}

{/*<svg viewBox="0 0 291.43 45.48" height="45px" id="reactive" className={s.reactive}>*/}
{/*<path*/}
{/*d="M11.16,28.47v17.2H.39V1.44H17.84q7.69,0,12,4A12.59,12.59,0,0,1,34.1,15a13.78,13.78,0,0,1-2.33,7.5q-2.33,3.65-7.62,5.17L35,45.67H22.38l-10-17.2Zm0-18.84V20.28h6.68a5.17,5.17,0,0,0,3.87-1.45A5.22,5.22,0,0,0,23.13,15a5.37,5.37,0,0,0-1.45-3.87,5.08,5.08,0,0,0-3.84-1.51Z"*/}
{/*transform="translate(-0.27 -0.69)" ref="r"/>*/}
{/*<path d="M67.68,1.31V9.5h-16V19H65.79v8.19H51.67V37.48h16v8.19H40.9V1.31Z"*/}
{/*transform="translate(-0.27 -0.69)" ref="e"/>*/}
{/*<path*/}
{/*d="M103.46,45.67,101,38.23H85.13l-2.46,7.43H71.2L86.57,1.31h13.1L115,45.67ZM87.83,30H98.29L93.06,14.29Z"*/}
{/*transform="translate(-0.27 -0.69)" ref="a"/>*/}
{/*<path*/}
{/*d="M122.71,39.65a21.65,21.65,0,0,1-6.58-16.22,21.65,21.65,0,0,1,6.58-16.22A22.23,22.23,0,0,1,138.8.81a22.72,22.72,0,0,1,13.1,3.91,20.36,20.36,0,0,1,8,10.84H147.05A8.46,8.46,0,0,0,139,10.7a11.26,11.26,0,0,0-8.73,3.46q-3.18,3.47-3.18,9.26t3.18,9.26A11.25,11.25,0,0,0,139,36.15a8.46,8.46,0,0,0,8.06-4.85h12.85a20.36,20.36,0,0,1-8,10.84A22.72,22.72,0,0,1,138.8,46,22.22,22.22,0,0,1,122.71,39.65Z"*/}
{/*transform="translate(-0.27 -0.69)" ref="c"/>*/}
{/*<path d="M162.24,9.63V1.44h34.9V9.63H185v36H174.27v-36Z" transform="translate(-0.27 -0.69)"*/}
{/*ref="t"/>*/}
{/*<path d="M202,45.67V1.44h10.77V45.67Z" transform="translate(-0.27 -0.69)" ref="i"/>*/}
{/*<path d="M232,45.67,216.35,1.44h11.47l11,33.71,11-33.71h11.47L245.52,45.67Z"*/}
{/*transform="translate(-0.27 -0.69)" ref="v"/>*/}
{/*<path d="M291.58,1.31V9.5h-16V19h14.11v8.19H275.57V37.48h16v8.19H264.8V1.31Z"*/}
{/*transform="translate(-0.27 -0.69)" ref="e_2"/>*/}
{/*</svg>*/}

export default MainPage;