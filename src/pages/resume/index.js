import React from 'react'
import {FormattedMessage} from 'react-intl';
import s from './_styles.pcss'

const icons = require('../../assets/svg/icons.svg');

const Resume = () => {
    return (
        <div className={s.wrap}>
            <section className="row">
                <header className="col_4"><h2><FormattedMessage id="techstack"/></h2></header>
                <div className="col_10">
                    <div className={s.skills}>
                        <div>
                            <h6>Core</h6>
                            <p>JS</p>
                            <p>HTML5</p>
                            <p>CSS</p>
                        </div>
                        <div>
                            <h6>JS</h6>
                            <p>react</p>
                            <p>redux, flux</p>
                            <p>jquery</p>
                        </div>
                        <div>
                            <h6>Styles</h6>
                            <p>postcss, css-next</p>
                            <p>sass, less</p>
                            <p>css-modules</p>
                        </div>
                        <div>
                            <h6>Testing</h6>
                            <p>chai</p>
                            <p>mocha</p>
                            <p>enzyme</p>
                        </div>
                        <div>
                            <h6>Server</h6>
                            <p>node.js</p>
                            <p>express</p>
                        </div>
                        <div>
                            <h6>DB</h6>
                            <p>mongo</p>
                            <p>postgres</p>
                        </div>
                        <div>
                            <h6>Java</h6>
                            <p>tapestry</p>
                            <p>Java EE</p>
                        </div>
                        <div>
                            <h6>DevTools</h6>
                            <p>webpack</p>
                            <p>gulp, grunt</p>
                        </div>
                        <div>
                            <h6>DevDeploy</h6>
                            <p>heroku, firebase</p>
                            <p>surge, netlify</p>
                        </div>
                        <div>
                            <h6>Package Managers</h6>
                            <p>npm</p>
                            <p>yarn</p>
                        </div>
                        <div>
                            <h6>Version Control</h6>
                            <p>git</p>
                            <p>svn</p>
                        </div>
                        <div>
                            <h6>PM</h6>
                            <p>Jira, Asana, Gitlub</p>
                            <p>Agile: Scrum, Kanban</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row">
                <header className="col_4"><h2><FormattedMessage id="experience"/></h2></header>
                <div className="col_10">
                    <div className={s.company}>
                        <div className={[s.position, 'col_10'].join(' ')}>
                            <h5><FormattedMessage id="hp"/></h5>

                            <p className="is-emph">[2016 - <FormattedMessage id="resume.to_present"/>] <FormattedMessage id="moscow"/></p>
                            <ul>
                                <li><FormattedMessage id="alx_1"/></li>
                                <li><FormattedMessage id="alx_2"/></li>
                                <li><FormattedMessage id="alx_3"/></li>
                                <li><FormattedMessage id="alx_4"/></li>
                            </ul>
                        </div>

                        <fiqure className="col_3">
                            <div className={s.logo_alx}>
                                <svg viewBox="0 0 138.49 121.7">
                                    <use xlinkHref={`${icons}#adluxe`}/>
                                </svg>
                            </div>

                            <figcaption>
                                <p><FormattedMessage id="alx_about"/></p>
                            </figcaption>
                        </fiqure>
                    </div>

                    <div className={s.company}>
                        <div className={[s.position, 'col_10'].join(' ')}>
                            <h5><FormattedMessage id="frontend_developer"/></h5>

                            <p className="is-emph">[2013 - 2016] <FormattedMessage id="moscow"/></p>
                            <ul>
                                <li><FormattedMessage id="mail_1"/></li>
                                <li><FormattedMessage id="mail_2"/></li>
                                <li><FormattedMessage id="mail_3"/></li>
                                <li><FormattedMessage id="mail_4"/></li>
                                <li><FormattedMessage id="mail_5"/></li>
                                <li><FormattedMessage id="mail_6"/></li>
                            </ul>
                        </div>

                        <fiqure className="col_3">
                            <div className={s.logo_mail}>
                                <svg viewBox="0 0 351.33 73.01">
                                    <use xlinkHref={`${icons}#mail`}/>
                                </svg>
                            </div>

                            <figcaption>
                                <p><FormattedMessage id="mail_about"/></p>
                            </figcaption>
                        </fiqure>
                    </div>

                    <div className={s.company}>
                        <div className={[s.position, 'col_10'].join(' ')}>
                            <h5><FormattedMessage id="web_developer"/></h5>

                            <p className="is-emph">[2011 - 2013] <FormattedMessage id="spb"/></p>
                            <ul>
                                <li><FormattedMessage id="ifree_1"/></li>
                                <li><FormattedMessage id="ifree_2"/></li>
                                <li><FormattedMessage id="ifree_3"/></li>
                            </ul>
                        </div>

                        <fiqure className="col_3">
                            <div className={s.logo_ifree}>
                                <a href="http://ifree.com/" target="_blank"><img src={require('./img/ifree.png')}
                                                                                 alt=""/></a>
                            </div>

                            <figcaption>
                                <p><FormattedMessage id="ifree_about"/></p>
                            </figcaption>
                        </fiqure>
                    </div>

                    <div className={s.company}>
                        <div className={[s.position, 'col_10'].join(' ')}>
                            <h5><FormattedMessage id="html_developer"/></h5>

                            <p className="is-emph">[2008 - 2011] <FormattedMessage id="ufa"/></p>
                            <ul>
                                <li><FormattedMessage id="simai_1"/></li>
                                <li><FormattedMessage id="simai_2"/></li>
                            </ul>
                        </div>

                        <fiqure className="col_3">
                            <div className={s.logo_simai}>
                                <svg viewBox="0 0 344.25 99">
                                    <use xlinkHref={`${icons}#simai`}/>
                                </svg>
                            </div>

                            <figcaption>
                                <p><FormattedMessage id="simai_about"/></p>
                            </figcaption>
                        </fiqure>
                    </div>
                </div>
            </section>

            <section className="row">
                <header className="col_4"><h2><FormattedMessage id="education"/></h2></header>
                <div className="col_10">
                    <div className={s.edu_row}>
                        <div className={[s.position, 'col_10'].join(' ')}>
                            <h5><FormattedMessage id="usatu"/></h5>

                            <p className="is-emph">[2005 - 2010] <FormattedMessage id="ufa"/></p>

                            <ul>
                                <li><FormattedMessage id="usatu.edu"/></li>
                            </ul>
                        </div>

                        <fiqure className="col_4">
                            <div className={s.logo_usatu}>
                                <a href="http://ugatu.su/" target="_blank"><img src={require('./img/usatu.png')}
                                                                                alt=""/></a>
                            </div>

                            <figcaption>
                                <p><FormattedMessage id="usatu.descr"/></p>
                            </figcaption>
                        </fiqure>
                    </div>

                    <div className={s.edu}>
                        <h5><FormattedMessage id="cisco.title"/></h5>

                        <p className="is-emph">[2009 - 2010] <FormattedMessage id="ufa"/></p>
                        <ul>
                            <li><FormattedMessage id="cisco.part1"/></li>
                            <li><FormattedMessage id="cisco.part2"/></li>
                        </ul>
                    </div>

                    <div className={s.edu}>
                        <h5><FormattedMessage id="ifree.academy.title"/></h5>

                        <p className="is-emph">[2013] <FormattedMessage id="spb"/></p>
                        <ul>
                            <li><FormattedMessage id="ifree.academy.part1"/></li>
                            <li><FormattedMessage id="ifree.academy.part2"/></li>
                            <li><FormattedMessage id="ifree.academy.part3"/></li>
                        </ul>
                    </div>

                    <div className={s.edu}>
                        <h5><FormattedMessage id="design.academy.title"/></h5>

                        <p className="is-emph">[2015] <FormattedMessage id="moscow"/></p>
                        <ul>
                            <li><FormattedMessage id="design.academy.part1"/></li>
                            <li><FormattedMessage id="design.academy.part2"/></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Resume