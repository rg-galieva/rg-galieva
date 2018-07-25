import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Image} from 'cloudinary-react';
import {CLOUD_PATH} from '../../constants'
import s from './_styles.pcss'


const Experiment = (props) => {
    let {experiment} = props;

    if (!experiment && !experiment.isVisible) return null;
    const {id, title, about_prj, date, img_prev, link, github, tech_stack} = experiment;

    const getImage = (src) => {
        return require("../../assets/img/experiments/" + src);
    };

    const getBgImg = (src) => {
        return {backgroundImage: 'url(' + getImage(src) + ')'}
    };

    return (
        <section className={s.experiment}>
            <div className={s.experiment_info}>
                <h2><FormattedMessage id={title}/></h2>
                <p className="is-emph">{date}</p>

                <div className={s.desc}>
                    <p><FormattedMessage id="techstack"/>: {tech_stack}</p>
                    <p><FormattedMessage id={about_prj}/></p>
                </div>

                <p><b><FormattedMessage id="live_preview"/>:</b> <a href={link} className={s.link_full_experiment} target="_blank">{link}</a></p>
                <p><b>GitHub:</b> <a href={github} className={s.link_full_experiment} target="_blank">{github}</a></p>
            </div>

            <div className={s.experiment_image}>
                <a href={link} target="_blank">
                    <div className={s.experiment_image_bg}>
                        <Image cloudName={CLOUD_PATH} publicId={`${CLOUD_PATH}/${img_prev}`}/>
                    </div>
                </a>
            </div>
        </section>
    );
}

// Experiment.propTypes = {
//     experiment: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string,
//         img: PropTypes.string,
//         link: PropTypes.string,
//         isVisible: PropTypes.bool.isRequired
//     })
// };

export default Experiment;

