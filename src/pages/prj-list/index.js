import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import ProjectPrev from '../../components/prj-prev'
import Slider from 'react-slick'

require('../../assets/styles/slick/slick.gcss');
import s from './_styles.pcss'

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

class ProjectList extends Component {
    render() {
        const projects = this.props.projects.map((project) => <div key={project.id}><ProjectPrev {...project}/></div>)
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
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
        };

        return (
            <Slider {...settings}>
                { projects }
            </Slider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.all
    }
};

export default connect(mapStateToProps)(ProjectList);