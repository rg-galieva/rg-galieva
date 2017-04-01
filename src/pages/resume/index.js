import React from 'react'
import {FormattedMessage, injectIntl} from 'react-intl';
import s from './_styles.pcss'

const alx_logo = require('./svg/adluxe.svg'),
    mail_logo = require('./svg/mail.svg'),
    simai_logo = require('./svg/simai.svg');

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
                            <p>ES2016</p>
                            <p>react</p>
                            <p>redux</p>
                            <p>flux</p>
                            <p>jquery</p>
                        </div>
                        <div>
                            <h6>Styles</h6>
                            <p>CSS3</p>
                            <p>LESS, SASS, PostCSS</p>
                            <p>css-modules, css-next</p>
                        </div>
                        <div>
                            <h6>DevTools</h6>
                            <p>webpack (v1, v2)</p>
                            <p>babel</p>
                            <p>grunt</p>
                        </div>
                        <div>
                            <h6>Testing</h6>
                            <p>mocha</p>
                        </div>
                        <div>
                            <h6>Server</h6>
                            <p>node.js</p>
                            <p>express</p>
                        </div>
                        <div>
                            <h6>DB</h6>
                            <p>MongoDB</p>
                            <p>PostgreSQL</p>
                        </div>
                        <div>
                            <h6>DevDeploy</h6>
                            <p>heroku</p>
                            <p>netlify</p>
                            <p>surge</p>
                            <p>firebase</p>
                        </div>
                        <div>
                            <h6>Package Managers</h6>
                            <p>npm</p>
                            <p>yarn</p>
                        </div>
                        <div>
                            <h6>Version Control</h6>
                            <p>git / GitHub</p>
                            <p>svn</p>
                        </div>
                        <div>
                            <h6>PM</h6>
                            <p>Jira, RedMind, Asana, Trello</p>
                            <p>Agile: Scrum, Kanban</p>
                        </div>
                        <div>
                            <h6>Other Tools</h6>
                            <p>Photoshop, Illustrator</p>
                            <p>Webstorm, Atom</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row">
                <header className="col_4"><h2><FormattedMessage id="experience"/></h2></header>
                <div className="col_10">
                    <div className={s.company}>
                        <div className={[s.position, 'col_10'].join(' ')}>
                            <h5><FormattedMessage id="pm"/></h5>

                            <p className="is-emph">[2016 - <FormattedMessage id="resume.to_present"/>] <FormattedMessage id="moscow"/></p>
                            <ul>
                                <li><FormattedMessage id="alx_1"/></li>
                                <li><FormattedMessage id="alx_2"/></li>
                                <li><FormattedMessage id="alx_3"/></li>
                                <li><FormattedMessage id="alx_4"/></li>
                            </ul>
                        </div>

                        <fiqure className="col_3">
                            <div dangerouslySetInnerHTML={{__html: alx_logo}} className={s.logo_alx}></div>

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
                            <div dangerouslySetInnerHTML={{__html: mail_logo}} className={s.logo_mail}></div>

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
                            <div dangerouslySetInnerHTML={{__html: simai_logo}} className={s.logo_simai}></div>

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
                        <h5></h5>

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

export default injectIntl(Resume)