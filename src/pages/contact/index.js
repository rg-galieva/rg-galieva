import React from 'react'
import {FormattedMessage} from 'react-intl';
import PageBg from '../../components/page-bg'
import s from './_styles.pcss'

const phone = require('./svg/phone.svg'),
    github = require('./svg/github.svg'),
    fb = require('./svg/facebook.svg'),
    inst = require('./svg/instagram.svg'),
    linkedin = require('./svg/linkedin.svg'),
    vk = require('./svg/vk.svg'),
    inbox = require('./svg/inbox.svg');

const Contact = () => {
    return (
        <div className={s.wrap}>
            <section className={[s.row, s.cont].join(' ')}>
                <header className={s.col_left}>
                    <h2><FormattedMessage id="contact_work"/></h2>
                </header>

                <div className={s.col_right}>
                    <div className={s.desc}>
                        <div className={s.row}>
                            <div dangerouslySetInnerHTML={{__html: phone}}
                                 className={[s.phone, s.logo].join(" ")}></div>
                            <p>917-302-87-14</p>
                        </div>

                        <div className={s.row}>
                            <div dangerouslySetInnerHTML={{__html: inbox}}
                                 className={[s.mail, s.logo].join(" ")}></div>
                            <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%72%67%2E%67%61%6C%69%65%76%61%40%67%6D%61%69%6C%2E%63%6F%6D"
                               target="_blank">rg.galieva@gmail.com</a>
                        </div>

                        <div className={s.row}>
                            <div dangerouslySetInnerHTML={{__html: linkedin}}
                                 className={[s.linkedin, s.logo].join(" ")}></div>
                            <a href="https://www.linkedin.com/in/rg-galieva"
                               target="_blank">linkedin.com/in/rg-galieva</a>
                        </div>

                        <div className={s.row}>
                            <div dangerouslySetInnerHTML={{__html: github}}
                                 className={[s.github, s.logo].join(" ")}></div>
                            <a href="https://github.com/rg-galieva/rg-galieva" target="_blank">github.com/rg-galieva/rg-galieva</a>
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
                            <div dangerouslySetInnerHTML={{__html: fb}}
                                 className={[s.fb, s.logo].join(" ")}></div>
                            <a href="https://www.facebook.com/rg.galieva" target="_blank">facebook.com/rg.galieva</a>
                        </div>

                        <div className={s.row}>
                            <div dangerouslySetInnerHTML={{__html: inst}}
                                 className={[s.inst, s.logo].join(" ")}></div>
                            <a href="https://www.instagram.com/rg.galieva" target="_blank">instagram.com/rg.galieva</a>
                        </div>

                        <div className={s.row}>
                            <div dangerouslySetInnerHTML={{__html: vk}}
                                 className={[s.vk, s.logo].join(" ")}></div>
                            <a href="https://vk.com/rg.galieva" target="_blank">vk.com/rg.galieva</a>
                        </div>
                    </div>
                </div>
            </section>

            <PageBg bg="contact_bg" page_node="contact_bg" css="animate_stroke contact_bg" viewBox="0 0 1103.86 1196.42"/>
        </div>
    )
}


export default Contact;

