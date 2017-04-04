import React from 'react'
import s from './_styles.pcss'
require('../../assets/styles/slick/slick.gcss');

const numb_0 = require('../../assets/svg/numbers/0.svg');

const NextArrow = (props) => {
    return (
        <div {...props} className={s.next}>NextArrow</div>
    )
}

const PrevArrow = (props) => {
    return (
        <div {...props} className={s.prev}>PrevArrow</div>
    )
}

const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    customPaging: function (i) {
        const numb = require(`../../assets/svg/numbers/${i+1}.svg`);
        return (
            <div className={s.slider}>
                <div dangerouslySetInnerHTML={{__html: `${numb_0} ${numb}`}} className={s.slider_numb}></div>
            </div>
        )
    },
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
}

export default settings