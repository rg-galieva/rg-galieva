import React from 'react'
import {FormattedHTMLMessage, FormattedMessage} from 'react-intl';
import PageBg from '../../components/page-bg'
import s from './_styles.pcss'

const About = () => {

    return (
        <div className={s.wrap}>
            <section className={['row', s.cont].join(' ')}>
                <header className="col_4">
                    <h2><FormattedMessage id="welcome"/></h2>
                </header>

                <div className="col_10">
                    <div className={s.desc}>
                        <p><FormattedHTMLMessage id="about.part1"/></p>

                        <p><FormattedMessage id="about.part2"/></p>

                        <p><FormattedMessage id="about.part3"/></p>

                        <p><FormattedMessage id="about.part4"/></p>

                        <p><FormattedMessage id="about.part5"/></p>

                        <p><FormattedMessage id="about.part6"/></p>
                    </div>
                </div>
            </section>

            <PageBg bg="about_bg" page_node="about_bg" css="animate_fill"/>
        </div>
    )
}

export default About