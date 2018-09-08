import React from 'react'
import {FormattedMessage} from 'react-intl';
import PageBg from '../../components/page-bg'
import {connect} from 'react-redux'
import s from './_styles.pcss'

const icons = require('../../assets/svg/icons.svg');

const Contact = (props) => {
    const bg = (props.isMobile) ? null :  <PageBg bg="contact_bg" page_node="contact_bg" css="animate_stroke contact_bg" viewBox="0 0 1103.86 1196.42"/>

    return (
        <div className={s.wrap}>
            <section className={[s.row, s.cont].join(' ')}>
                <header className={s.col_left}>
                    <h2><FormattedMessage id="contact_work"/></h2>
                </header>

                <div className={s.col_right}>
                    <div className={s.desc}>
                        <div className={s.row}>
                            <div className={[s.mail, s.logo].join(" ")}>
                                <svg viewBox="0 0 55 55">
                                    <use xlinkHref={`${icons}#inbox`}/>
                                </svg>
                            </div>
                            <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%72%67%2E%67%61%6C%69%65%76%61%40%67%6D%61%69%6C%2E%63%6F%6D"
                               target="_blank">rg.galieva@gmail.com</a>
                        </div>

                        <div className={s.row}>
                            <div className={[s.linkedin, s.logo].join(" ")}>
                                <svg viewBox="0 0 455 455">
                                    <use xlinkHref={`${icons}#linkedin`}/>
                                </svg>
                            </div>
                            <a href="https://www.linkedin.com/in/rg-galieva"
                               target="_blank">linkedin.com/in/rg-galieva</a>
                        </div>

                        <div className={s.row}>
                            <div className={[s.github, s.logo].join(" ")}>
                                <svg viewBox="0 0 568.034 568.034">
                                    <use xlinkHref={`${icons}#github`}/>
                                </svg>
                            </div>
                            <a href="https://github.com/rg-galieva" target="_blank">github.com/rg-galieva</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className={[s.row, s.cont].join(' ')}>
                <header className={s.col_left}>
                    <h2><FormattedMessage id="contact_friends"/></h2>
                </header>

                <div className={s.col_right}>
                    <div className={s.desc}>
                        <div className={s.row}>
                            <div className={[s.fb, s.logo].join(" ")}>
                                <svg viewBox="0 0 455.73 455.73">
                                    <use xlinkHref={`${icons}#fb`}/>
                                </svg>
                            </div>
                            <a href="https://www.facebook.com/rg.galieva" target="_blank">facebook.com/rg.galieva</a>
                        </div>

                        <div className={s.row}>
                            <div className={[s.inst, s.logo].join(" ")}>
                                <svg viewBox="0 0 455.73 455.73">
                                    <use xlinkHref={`${icons}#inst`} />
                                </svg>
                            </div>
                            <a href="https://www.instagram.com/rg.galieva" target="_blank">instagram.com/rg.galieva</a>
                        </div>

                        <div className={s.row}>
                            <div className={[s.vk, s.logo].join(" ")}>
                                <svg viewBox="0 0 455 455">
                                    <use xlinkHref={`${icons}#vk`} />
                                </svg>
                            </div>
                            <a href="https://vk.com/rg.galieva" target="_blank">vk.com/rg.galieva</a>
                        </div>
                    </div>
                </div>
            </section>

            {bg}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isMobile: state.switchVersion.isMobile
    }
};

export default connect(mapStateToProps)(Contact)

